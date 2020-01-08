import Vue from 'vue'
import './plugins/vuetify'
import Api from './plugins/Api'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Api);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {

  if (to.fullPath === '/') {
    return next({path: '/dash' });
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isAuth) {
      next({path: '/dash' })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  computed: {
  },
  methods: {
    handlerError (e, messDummy) {
      if (e.isShow) {
        this.$store.commit('addAlert', {type: 'error', message: e.message.replace(/\n/g, '<br/>')});
        return false;
      }
      // eslint-disable-next-line
      console.error(e);
      this.$store.commit('addAlert', {type: 'error', message: messDummy});
    }
  }
}).$mount('#app');

