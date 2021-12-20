import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAo1PtQFcswLN9eQuUkORWBLJv3eugAA88",
  authDomain: "netflix-clone-1551c.firebaseapp.com",
  projectId: "netflix-clone-1551c",
  storageBucket: "netflix-clone-1551c.appspot.com",
  messagingSenderId: "224313392162",
  appId: "1:224313392162:web:c92fcb015ede9923d35e7b",
  measurementId: "G-1RQ9J8NRQF",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
