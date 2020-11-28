import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUCy1li80EDQvmU0ErvH8LoES5v8THwSU",
    authDomain: "slack-clone-96aed.firebaseapp.com",
    databaseURL: "https://slack-clone-96aed.firebaseio.com",
    projectId: "slack-clone-96aed",
    storageBucket: "slack-clone-96aed.appspot.com",
    messagingSenderId: "9293246772",
    appId: "1:9293246772:web:e21a385911aceb5d47f561",
    measurementId: "G-KJSJ6R43BM"
};

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;