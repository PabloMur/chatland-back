const admin = require("firebase-admin");

const secretKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const databaseURLSecretKey = process.env.DATABASEURL_SRECRETKEY;

if (admin.apps.length > 0) {
  admin.app();
} else {
  admin.initializeApp({
    credential: admin.credential.cert(secretKey),
    databaseURL: databaseURLSecretKey,
  });
}

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

module.exports = { firestoreDB, realtimeDB };
