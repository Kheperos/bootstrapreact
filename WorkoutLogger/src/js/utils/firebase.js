const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCaKnbSyDTRwY3AwopAIj8hYp0-CuPrdUk",
    authDomain: "contactlist-25016.firebaseapp.com",
    databaseURL: "https://contactlist-25016.firebaseio.com",
    projectId: "contactlist-25016",
    storageBucket: "contactlist-25016.appspot.com",
    messagingSenderId: "246723871918"
};

firebase.initializeApp(config);

module.exports = firebase;