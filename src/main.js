import Vue from 'vue';
import App from './App';
import store from './store';
import api from './http/api';

Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(api);
Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();
