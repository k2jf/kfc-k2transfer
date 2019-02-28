/**
 * 以下为巡检助手的代码，仅供参考
 */
import { getHeatMapData } from '@/api/home'

export default {
	namespaced: true,
	state: {
		// wfIds: [],
		tabList: [],
		heatMapData: [],
		heatmapLoading: false,
		activeTabName: 'heatmap'
	},
	mutations: {
		// syncWfIds (state, payload) {
		//   state.wfIds = payload.wfIds
		// },
		syncHeatMapData (state, payload) {
			state.heatMapData = payload.data
		},
		syncTabs (state, payload) {
			state.tabList = payload.tabList
			if (payload.activeTabName) {
				state.activeTabName = payload.activeTabName
			}
		},
		syncActiveTabName (state, payload) {
			state.activeTabName = payload.activeTabName
		},
		syncHeatmapLoading (state, payload) {
			state.heatmapLoading = payload.heatmapLoading
		}
	},
	actions: {
		updateHeatMap ({ commit, state }, payload) {
			commit('syncTabs', { tabList: [], activeTabName: 'heatmap' })
			commit('syncHeatmapLoading', { heatmapLoading: true })
			return new Promise((resolve, reject) => {
				if (payload.wfIds.length > 0) {
					const options = { body: { wfInfo: payload.wfIds } }
					if (payload.signal) options.signal = payload.signal
					getHeatMapData(options)
						.then(res => {
							const data = res.data
							data.reverse()
							commit('syncWfIds', payload, { root: true })
							commit('syncHeatMapData', { data })
							commit('syncHeatmapLoading', { heatmapLoading: false })
							resolve()
						})
						.catch(reject)
				} else {
					commit('syncWfIds', payload, { root: true })
					commit('syncHeatMapData', { data: [] })
					commit('syncHeatmapLoading', { heatmapLoading: false })
				}
			})
		}
	}
}
