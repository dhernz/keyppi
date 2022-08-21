import Vue from "vue";
import App from "./App.vue";
import "./firebase";
import firebase from "firebase/compat/app";
import VueFirestore from "vue-firestore";
import VueFormulate from "@braid/vue-formulate";


Vue.use(VueFirestore);
Vue.use(firebase);
Vue.use(VueFormulate);

Object.defineProperty(Vue.prototype, "firebase", {
  get() {
    return this.$root.firebase;
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
