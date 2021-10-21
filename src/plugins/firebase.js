import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPqNfYju8RnMBWLZtAsIcJNF4g1LV4B54",
    authDomain: "todo-list-vue-55f45.firebaseapp.com",
    projectId: "todo-list-vue-55f45",
    storageBucket: "todo-list-vue-55f45.appspot.com",
    messagingSenderId: "447924766691",
    appId: "1:447924766691:web:478c5bad726e935091c2d6"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  const profileCollection = db.collection('profile')
  const tasksCollection = db.collection('tasks')

  export {
      db, auth, profileCollection, tasksCollection
  }