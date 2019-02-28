<template>
  <div class="transfer-demo">
    <K2Transfer
      :data="data1"
      :style="{width: '660px', margin: '0 auto'}"
      :list-style="{height: '400px', width: '300px'}"
      :target-keys="targetKeys1"
      :render-format="render1"
      @on-change="handleChange1"
      @on-dblclick="handleChange1" />
  </div>
</template>
<script>
import K2Transfer from '@/components/K2Transfer'

export default {
	name: 'Another',
	components: {
		K2Transfer
	},
	data () {
		return {
			data1: this.getMockData(),
			targetKeys1: this.getTargetKeys()
		}
	},
	methods: {
		getMockData () {
			let mockData = []
			for (let i = 1; i <= 50; i++) {
				mockData.push({
					key: i.toString(),
					label: '内容 ' + i,
					description: 'The desc of content  ' + i
				})
			}
			return mockData
		},
		getTargetKeys () {
			return this.getMockData()
				.filter(() => Math.random() * 2 > 1)
				.map(item => item.key)
		},
		render1 (item) {
			return item.label
		},
		handleChange1 (newTargetKeys, direction, moveKeys) {
			this.targetKeys1 = newTargetKeys
		}
	}
}
</script>
<style lang="scss" scoped>
.transfer-demo {
  padding: 30px;
}
</style>
