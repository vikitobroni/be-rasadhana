// const firebase = require('firebase/app');
// require('firebase/auth');

// const firebaseConfig = {
//   apiKey: 'AIzaSyAkJgSNR8YeTaxmKD5JXX4004bOMlv9-9I',
//   authDomain: 'be-rasadhana.firebaseapp.com',
//   projectId: 'be-rasadhana',
// };

// firebase.initializeApp(firebaseConfig);

// async function getToken() {
//   try {
//     const userCredential = await firebase
//       .auth()
//       .signInWithEmailAndPassword('test@example.com', 'password');
//     const idToken = await userCredential.user.getIdToken();
//     console.log('ID Token:', idToken);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// getToken();

const admin = require('firebase-admin');

// Inisialisasi Firebase Admin SDK
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function getToken() {
  try {
    // Membuat token kustom untuk pengguna dengan UID tertentu (contoh UID)
    const customToken = await admin.auth().createCustomToken('test-user-uid');
    console.log('Custom Token:', customToken);
  } catch (error) {
    console.error('Error generating custom token:', error);
  }
}

getToken();
