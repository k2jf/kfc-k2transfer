<template>
  <div
    :class="classes"
    :style="listStyle">
    <div :class="prefixCls + '-header'">
      <Checkbox
        :value="checkedAll"
        :disabled="checkedAllDisabled"
        @on-change="toggleSelectAll" />
      <span :class="prefixCls + '-header-title'" @click="toggleSelectAll(!checkedAll)">{{ title }}</span>
      <span :class="prefixCls + '-header-count'">{{ count }}</span>
    </div>
    <div :class="bodyClasses">
      <div :class="prefixCls + '-body-search-wrapper'" v-if="filterable">
        <Search
          :prefix-cls="prefixCls + '-search'"
          :query="query"
          :placeholder="filterPlaceholder"
          @on-query-clear="handleQueryClear"
          @on-query-change="handleQueryChange" />
      </div>
      <ul :class="prefixCls + '-content'">
        <li
          :class="itemClasses(item)"
          v-for="(item, index) in filterData"
          :key="index"
          @click.prevent="select(item, $event)"
          @dblclick.prevent="dbclick(item)">
          <Checkbox :value="isCheck(item)" :disabled="item.disabled" />
          <span v-html="showLabel(item)" />
        </li>
        <li :class="prefixCls + '-content-not-found'">
          {{ notFoundText }}
        </li>
      </ul>
    </div>
    <div :class="prefixCls + '-footer'" v-if="showFooter">
      <slot />
    </div>
  </div>
</template>
<script>
import Search from './Search.vue'
import Checkbox from 'iview/src/components/checkbox/checkbox.vue'

export default {
	name: 'List',
	components: { Search, Checkbox },
	props: {
		prefixCls: String,
		data: Array,
		renderFormat: Function,
		checkedKeys: Array,
		listStyle: Object,
		title: [String, Number],
		filterable: Boolean,
		filterPlaceholder: String,
		filterMethod: Function,
		notFoundText: String,
		validKeysCount: Number,
		// 存放最后一次被选中的 key
		lastCheckedKey: Number
	},
	data () {
		return {
			showItems: [],
			query: '',
			showFooter: true
		}
	},
	computed: {
		classes () {
			return [
				`${this.prefixCls}`,
				{
					[`${this.prefixCls}-with-footer`]: this.showFooter
				}
			]
		},
		bodyClasses () {
			return [
				`${this.prefixCls}-body`,
				{
					[`${this.prefixCls}-body-with-search`]: this.filterable,
					[`${this.prefixCls}-body-with-footer`]: this.showFooter
				}
			]
		},
		count () {
			const validKeysCount = this.validKeysCount
			return (validKeysCount > 0 ? `${validKeysCount}/` : '') + `${this.data.length}`
		},
		checkedAll () {
			return this.filterData.filter(data => !data.disabled).length === this.validKeysCount && this.validKeysCount !== 0
		},
		checkedAllDisabled () {
			return this.filterData.filter(data => !data.disabled).length <= 0
		},
		filterData () {
			return this.showItems.filter(item => this.filterMethod(item, this.query))
		}
	},
	watch: {
		data () {
			this.updateFilteredData()
		}
	},
	created () {
		this.updateFilteredData()
	},
	mounted () {
		this.showFooter = this.$slots.default !== undefined
	},
	methods: {
		itemClasses (item) {
			return [
				`${this.prefixCls}-content-item`,
				{
					[`${this.prefixCls}-content-item-disabled`]: item.disabled
				}
			]
		},
		showLabel (item) {
			return this.renderFormat(item)
		},
		isCheck (item) {
			return this.checkedKeys.some(key => key === item.key)
		},
		select (item, event) {
			// 只有 lastCheckedKey 存在，才执行多选
			console.log(event.shiftKey)
			if (item.disabled) return
			const index = this.checkedKeys.indexOf(item.key)
			index > -1 ? this.checkedKeys.splice(index, 1) : this.checkedKeys.push(item.key)
			this.$parent.handleCheckedKeys()
		},
		dbclick (item) {
			console.log(item)
			this.$parent.handleDblClick(item.key)
		},
		updateFilteredData () {
			this.showItems = this.data
		},
		toggleSelectAll (status) {
			const keys = status
				? this.filterData.filter(data => !data.disabled || this.checkedKeys.indexOf(data.key) > -1).map(data => data.key)
				: this.filterData.filter(data => data.disabled && this.checkedKeys.indexOf(data.key) > -1).map(data => data.key)
			this.$emit('on-checked-keys-change', keys)
		},
		handleQueryClear () {
			this.query = ''
		},
		handleQueryChange (val) {
			this.query = val
		}
	}
}
</script>
