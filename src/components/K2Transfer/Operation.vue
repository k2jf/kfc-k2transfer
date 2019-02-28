<template>
  <div :class="prefixCls + '-operation'">
    <i-button
      type="primary"
      size="small"
      :disabled="!rightActive"
      @click.native="moveToLeft">
      <Icon type="ios-arrow-back" /> <span>{{ operations[0] }}</span>
    </i-button>
    <i-button
      type="primary"
      size="small"
      :disabled="!leftActive"
      @click.native="moveToRight">
      <span>{{ operations[1] }}</span> <Icon type="ios-arrow-forward" />
    </i-button>
  </div>
</template>
<script>
import iButton from 'iview/src/components/button/button.vue'
import Icon from 'iview/src/components/icon/icon.vue'

export default {
	name: 'Operation',
	components: { iButton, Icon },
	props: {
		prefixCls: String,
		operations: Array,
		leftActive: Boolean,
		rightActive: Boolean
	},
	methods: {
		moveToLeft () {
			this.$parent.moveTo('left')
		},
		moveToRight () {
			this.$parent.moveTo('right')
		}
	}
}
</script>
