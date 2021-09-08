
<!-- 脚栏
负责跳转
 -->
<template>
	<div >
		<van-tabbar v-model="active" class="footerBar">
			<router-link to="/indexWrap">
				<van-tabbar-item icon="eye-o">发现</van-tabbar-item>
			</router-link>
			<router-link to="/study">
				<van-tabbar-item icon="label-o">学习</van-tabbar-item>
			</router-link>
			<router-link to="/study">
				<van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
			</router-link>
		</van-tabbar>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	name: 'FootBar',
	setup() {
		const router = useRouter()
		// const route = useRoute()
		const gotoStudy = () => {
			router.push('/study')
		}
		const active = ref(0)
		return { active, gotoStudy }
	},
})
</script>
<style lang="scss" scoped>
.footerBar{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>
