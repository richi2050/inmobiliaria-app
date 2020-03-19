import app from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyBaShipuCRayaYHi3BxrnUH5er-HV7mB0E",
  authDomain: "home-ab19e.firebaseapp.com",
  databaseURL: "https://home-ab19e.firebaseio.com",
  projectId: "home-ab19e",
  storageBucket: "home-ab19e.appspot.com",
  messagingSenderId: "867774136943",
  appId: "1:867774136943:web:bd5ae34f7ebec89095839a"
};

export default class Firebase{

  constructor(){
    app.initializeApp();
    this.db = app.firestore
  }
}