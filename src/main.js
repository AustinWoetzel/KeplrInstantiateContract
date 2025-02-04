import { createApp } from 'vue'
import App from './App.vue'
import {
  gripApp,
  getKeplrAccountProvider,
} from '@stakeordie/griptape.js';


const restUrl = "http://testnet.securesecrets.org:1317";
const provider = getKeplrAccountProvider();


function runApp() {
  createApp(App)
    .mount('#app');
}

gripApp(restUrl, provider, runApp);