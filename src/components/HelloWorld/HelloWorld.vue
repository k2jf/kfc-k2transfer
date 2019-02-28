<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      更多配置查看
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener">vue-cli 文档</a>.
    </p>
    <h3>k2jf 前端开发规范</h3>
    <ul>
      <li>
        <a
          href="http://conf.k2data.com.cn:18080/pages/viewpage.action?pageId=5687792"
          target="_blank"
          rel="noopener">第一版</a>
      </li>
    </ul>
    <h3>内置插件</h3>
    <ul>
      <li>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener">vue-router</a>
      </li>
      <li>
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://www.iviewui.com/"
          target="_blank"
          rel="noopener">iview</a>
      </li>
      <li>
        <a
          href="https://github.com/iamkun/dayjs"
          target="_blank"
          rel="noopener">dayjs</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			required: true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: .67em 0;
}
h3 {
  margin: 40px 0 0;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
