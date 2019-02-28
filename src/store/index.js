import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import home from './module/home'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		user,
		home
	}
})
