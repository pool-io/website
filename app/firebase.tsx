// Import the functions you need from the SDKs you need
import {
    FirebaseAppSettings,
    FirebaseOptions,
    initializeApp
} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyBS2pvLCshpIlCLCSMRwoG4ALNQEVS6HDw',
    authDomain: 'pool-c23a1.firebaseapp.com',
    projectId: 'pool-c23a1',
    storageBucket: 'pool-c23a1.appspot.com',
    messagingSenderId: '940489172024',
    appId: '1:940489172024:web:76cc14c22963663d42f2cd',
    measurementId: 'G-2EKKG29H77'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Firebase = {
    app,
    auth
};
