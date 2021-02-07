import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'  
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
 
//import VueFire from 'vuefire'
import router from './router/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYQyCxnKoXrOMN8pLMOro_ztMuWvN7LCc",
  authDomain: "fabrica-memes-37570.firebaseapp.com",
  projectId: "fabrica-memes-37570",
  storageBucket: "fabrica-memes-37570.appspot.com",
  messagingSenderId: "912045911696",
  appId: "1:912045911696:web:32da98e643eba8eb6c3215"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)


new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: {App} 
}).$mount('#app')
