import app from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCwK-Vn6H8NJgfilWxgUp3xI-UEWC9hKhY",
    authDomain: "home-b1325.firebaseapp.com",
    databaseURL: "https://home-b1325.firebaseio.com",
    projectId: "home-b1325",
    storageBucket: "home-b1325.appspot.com",
    messagingSenderId: "915091278452",
    appId: "1:915091278452:web:fdc30bdd43d3f2f98a5f21",
    measurementId: "G-81GWEPCJS9"
  };

class Firebase {
    constructor () {
        app.initializeApp(config);
        this.database = app.firestore();
    }
}

export default Firebase;