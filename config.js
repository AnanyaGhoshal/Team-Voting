import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDW3uoWWlKGUiZhs_HfT-WMe2F5sgOjbTQ",
    authDomain: "team-voting-app-b1eea.firebaseapp.com",
    databaseURL: "https://team-voting-app-b1eea-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-b1eea",
    storageBucket: "team-voting-app-b1eea.appspot.com",
    messagingSenderId: "386844991257",
    appId: "1:386844991257:web:2f8b7986c996b41ee1ef88"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.database();