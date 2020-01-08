import Vue from 'vue'
import Vuex from 'vuex'
import {alerts} from './store/alert'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		alerts,
	},
	state: {
		drawer: false,
	},
	mutations: {
		changeDrawer(state, drawer) {
			state.drawer = drawer;
		},
	},
	actions: {}
})
