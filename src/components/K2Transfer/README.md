## K2Transfer 穿梭框组件
> 注意：次组件依赖 iview，请确保已安装 iview

开发/维护人：kk


## 新增功能
1. [x] 支持自定义穿梭框最外层 container 样式
2. [x] 支持双击某项来进行穿梭（如双击左栏某项，该项自动进入右栏，不需要点击中间的箭头）
3. [x] 支持鼠标 shift 一次性多选
4. [ ] 支持键盘操作（In progress）

## API
### Transfer props
**兼容 iview Transfer 组件所有 API, (*) 为 K2Transfer 新增API**

| 属性               | 说明                                                         | 类型     | 默认值                       |
| ------------------ | ------------------------------------------------------------ | -------- | ---------------------------- |
| data               | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外。 | Array    | []                           |
| targetKeys         | 显示在右侧框数据的key集合                                    | Array    | []                           |
| render-format      | 每行数据渲染函数，该函数的入参为 `data` 中的项               | Function | 默认显示label，没有时显示key |
| selected-keys      | 设置哪些项应该被选中                                         | Array    | []                           |
|        **styles (*)**        | 穿梭框最外层容器自定义样式 | Object | {} |
| list-style         | 两个穿梭框的自定义样式                                       | Object   | {}                           |
| titles             | 标题集合，顺序从左至右                                       | Array    | ['源列表', '目的列表']       |
| operations         | 操作文案集合，顺序从上至下                                   | Array    | []                           |
| **doubleClick (*)** | 时候支持双击                                   | Boolean    | true                         |
| filterable         | 是否显示搜索框                                               | Boolean  | false                        |
| filter-placeholder | 搜索框的占位                                                 | String   | 请输入搜索内容               |
| filter-method      | 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词 | Function | 默认搜索label                |
| not-found-text     | 当列表为空时显示的内容                                       | String   | 列表为空                     |

### Transfer events

| 事件名              | 说明                           | 返回值                                 |
| ------------------- | ------------------------------ | -------------------------------------- |
| on-change           | 选项在两栏之间转移时的回调函数 | targetKeys, direction, moveKeys        |
| **on-dblclick (*)** | 双击项时触发                   | targetKeys, direction, moveKeys        |
| on-selected-change  | 选中项发生变化时触发           | sourceSelectedKeys, targetSelectedKeys |


### Transfer slot

| 名称 | 说明           |
| ---- | -------------- |
| 无   | 自定义底部内容 |