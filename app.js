const express = require('express');
const admin = require('firebase-admin');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const port = 3000;

app.use(express.json());

const serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://be-rasadhana.firebaseio.com',
});

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.post('/verify-token', async (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.status(200).send({ message: 'Token verified!', user: decodedToken });
  } catch (error) {
    res.status(401).send({ error: 'Invalid token', details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Server-side RasaDhana');
});

app.use('/api', protectedRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));
