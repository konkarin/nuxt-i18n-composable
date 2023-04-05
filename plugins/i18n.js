import Vue from "vue";
import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n-bridge";

Vue.use(VueI18n, { bridge: true }); // you must specify '{ bridge: true }' plugin option when install vue-i18n

export default ({ app }) => {
  const i18n = createI18n(
    {
      legacy: false,
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
    },
    VueI18n
  );

  app.i18n = i18n;
  Vue.use(i18n);
};
