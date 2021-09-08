<!-- 学习课程页面 
    判断是否登录-》 ！进入登录界面   = 进入学习列表
    侧边栏  我的课程 ； 收藏夹 ；推荐课程=》（最新课程，根据推荐）
    展示栏  课程 =》点击进入详情页
-->
<template>
	<div>
		<Join></Join>
		
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
import Join from '@/components/Join.vue'
export default defineComponent({
	name: 'Study',
	components: {
		Join,
	},
	setup() {
        

    },
})
</script>

<style lang="scss" scoped>

</style>
