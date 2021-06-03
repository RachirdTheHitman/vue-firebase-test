import firebase from 'firebase';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const config = {
    apiKey: "AIzaSyBNMmkDkLya2jvbraV5Y18OrCv-WRDf5W0",
    authDomain: "vue-test-app-ef47d.firebaseapp.com",
    projectId: "vue-test-app-ef47d",
    storageBucket: "vue-test-app-ef47d.appspot.com",
    messagingSenderId: "998288743386",
    appId: "1:998288743386:web:2eb881f4ee5a2544d73ee3",
    measurementId: "G-LE8JEGFDYJ",
  };
  
export const firebaseApp = firebase.initializeApp(config);

createApp(App).use(router).mount('#app')
