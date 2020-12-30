import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9unD_woDxxadzZOGygznrx0RIabdZjXg",
  authDomain: "test-fb-vue.firebaseapp.com",
  projectId: "test-fb-vue",
  storageBucket: "test-fb-vue.appspot.com",
  messagingSenderId: "441251670841",
  appId: "1:441251670841:web:f6844d0b09db4ef25816e8"
};

export default firebase.initializeApp(firebaseConfig);

