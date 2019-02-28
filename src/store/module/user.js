/**
 * 以下为巡检助手的代码，仅供参考
 */
import { getUserInfo } from '@/api/home'

export default {
	state: {
		name: ''
	},
	mutations: {
		login (state, payload) {
			state.name = payload.user
		},
		logout (state) {
			state.name = null
		}
	},
	actions: {
		login ({ commit }) {
			// if (process.env.NODE_ENV === 'production') {
			getUserInfo().then(res => {
				commit('login', { user: res.data })
			})
			// } else {
			//   commit('login', { user: 'DEV' })
			// }
		}
	}
}
