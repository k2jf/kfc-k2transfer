<template>
  <div class="home page-container">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="KMX 应用组件开发模板" />
    <footer class="footer">
      <Button
        ghost
        type="success"
        @click="navigateToAnotherPage">
        去往另一个页面
      </Button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import { Button } from 'iview'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Button
	},
	methods: {
		navigateToAnotherPage () {
			this.$router.push('/another-page')
		}
	}
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.footer {
  margin-top: 20px;
}
</style>
