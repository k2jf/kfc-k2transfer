<template>
  <div class="transfer-demo">
    <K2Transfer
      :data="data3"
      filterable
      :style="{width: '702px', margin: '0 auto'}"
      :list-style="{height: '400px', width: '300px'}"
      :target-keys="targetKeys3"
      :render-format="render3"
      :titles="['未选字段', '已选字段']"
      :operations="['去除','选取']"
      @on-change="handleChange3"
      @on-dblclick="handleChange3">
      <div :style="{float: 'right', margin: '5px'}">
        <Button size="small" @click="reloadMockData">
          刷新
        </Button>
      </div>
    </K2Transfer>
  </div>
</template>
<script>
import K2Transfer from '@/components/K2Transfer'
import { Button } from 'iview'

export default {
  name: 'Another',
  components: {
    K2Transfer,
    Button
  },
  data () {
    return {
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '250px',
        height: '300px'
      }
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
        .filter((d, i) => i > 46)
        .map(item => item.key)
    },
    handleChange3 (newTargetKeys) {
      this.targetKeys3 = newTargetKeys
    },
    render3 (item) {
      return '我是' + item.label
    },
    reloadMockData () {
      this.data3 = this.getMockData()
      this.targetKeys3 = this.getTargetKeys()
    }
  }
}
</script>
<style lang="scss" scoped>
.transfer-demo {
  padding: 30px;
}
</style>
