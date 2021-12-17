import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VModal from "vue-js-modal";

import Vuelidate from "vuelidate";

import Toasted from "vue-toasted";

import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import enUS from "@kangc/v-md-editor/lib/lang/en-US";

import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 531276453884326,
  theme_color: '#333333',
  locale: 'en_US',
})

VueMarkdownEditor.lang.use("en-US", enUS);
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);

Vue.use(Toasted, {
  iconPack: "fontawesome"
});

Vue.use(Vuelidate);

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


