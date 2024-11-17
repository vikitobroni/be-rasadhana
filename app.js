const express = require('express');
const admin = require('firebase-admin');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const port = 3000;

const serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://be-rasadhana.firebaseio.com',
});

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Express.js server!');
});

app.use('/api', protectedRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
