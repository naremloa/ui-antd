import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import VueI18n from 'vue-i18n';
import { isFunction, isString } from './utils/lodash';

export const install = (Vue) => {
  Vue.use(Vuetify);
  Vue.use(VueI18n);
};

export default () => {
  const elementLocales = {
    'zh-CN': zhHans,
  };

  function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json?$/i);
    const messages = {};
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        messages[locale] = {
          ...locales(key),
          ...(elementLocales[locale] || {}),
        };
      }
    });
    return messages;
  }

  const i18n = new VueI18n({
    // FIXME: process is not defined
    // locale: process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
    locale: 'zh-CN',
    // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages: loadLocaleMessages(),
  });

  const displayT = (str, ...params) => (i18n.te(str) ? i18n.t(str, ...params) : str);

  return new Vuetify({
    breakpoint: {
      mobileBreakpoint: 768,
    },
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#6db7ff',
          secondary: '#85b8cb',
          accent: '#20B2AA',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
    lang: {
      t: (key, ...params) => {
        // NOTE: 部分 vuetify 元件自带翻译功能。可通过注释这段后，提供的 warning 判断有哪些元件有翻译功能。
        if (!isFunction(key) && !isString(key)) return key;
        return displayT(key, ...params);
      },
    },
  });
};
