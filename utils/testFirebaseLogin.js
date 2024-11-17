const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyAkJgSNR8YeTaxmKD5JXX4004bOMlv9-9I',
  authDomain: 'be-rasadhana.firebaseapp.com',
  projectId: 'be-rasadhana',
};

firebase.initializeApp(firebaseConfig);

async function loginWithCustomToken() {
  const customToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTg0OTA2MCwiZXhwIjoxNzMxODUyNjYwLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay0xYTJ5c0BiZS1yYXNhZGhhbmEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay0xYTJ5c0BiZS1yYXNhZGhhbmEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJ0ZXN0LXVzZXItdWlkIn0.LTbKSbNHcG6Oy4gj7o4HX7BWMX5-kPGNSJ6iqEjdXdhBXpqF2OWqyBi2gAsSgVRfGjZXqEeWmPInD06Nq_QkLDvTi3pQFqoQVfr0-41P1mNP7vhxkYaSD74oo3YmDgMWci-9CVwYLXR0qhAQyZ39P1KvkxdQPD-D8c4NiBPHHSD7wjToHHH8t-mWbTewZG3CZZnlAB6KMPsaaacc4Kh9psK84mXKG_vnIeo0eGTM65OkaF-cdWgDUTr3q897iCqgxBzz6zlA9Eqj2zzDybKc_9K3-ZyNNrdFejqmp8bIxGuVUJI6o6cgWHq8bXklkQ6D7SQAEZc1Cprqmh0GFKAIXQ ';
  try {
    const userCredential = await firebase
      .auth()
      .signInWithCustomToken(customToken);
    const idToken = await userCredential.user.getIdToken();
    console.log('ID Token:', idToken);
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
}
loginWithCustomToken();
