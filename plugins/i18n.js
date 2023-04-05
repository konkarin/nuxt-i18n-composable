import Vue from "vue";
import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n-composable";
// import { createI18n } from "vue-i18n-bridge";

// Vue.use(VueI18n, { bridge: true }); // you must specify '{ bridge: true }' plugin option when install vue-i18n

// Vue.use(VueI18n);

export default ({ app }, inject) => {
  const i18n = createI18n({
    locale: "ja",
    messages: {
      en: {
        welcome: "Welcome",
      },
      fr: {
        welcome: "Bienvenue",
      },
      ja: {
        welcome: "ようこそ",
      },
    },
  });

  app.i18n = i18n;
};
