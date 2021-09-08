<!-- 1 
 头部栏 公司logo  剧中
 轮播图
 导航栏 ===> 课程分类
 最新课程 ===>最新课程展示 
 各类课程展示===>  模型 ；动画 ； 特效 ；基础软件

 二维码
 footbar    首页；学习列表；个人中心
 命名请看 ===> naming
-->
<template>
	<div class="indexWrap">
		<div class="header">
			高清艺术
		</div>
		<router-view></router-view>
		<FootBar></FootBar>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'

import FootBar from '@/components/FootBar.vue'
export default defineComponent({
	name: 'Home',
	components: {
		FootBar,
	},
	setup() {},
})
</script>
<style lang="scss" scoped>
.indexWrap {
	.header {
		width: 100%;
		height: 0.5rem;
		background-color: #000;
		color: #fff;
		font-size: 0.25rem;
		text-align: center;
		line-height: 0.5rem;
	}
}
</style>
