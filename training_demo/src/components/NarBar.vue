<template>
	<div class="navBar">
		<div class="navItem">
			<img src="../assets/jm.png" alt="" />
			<p>模型课程</p>
		</div>
		<div class="navItem">
			<img src="../assets/dz.png" alt="" />
			<p>动画课程</p>
		</div>
		<div class="navItem">
			<img src="../assets/tx.png" alt="" />
			<p>特效课程</p>
		</div>
		<div class="navItem">
			<img src="../assets/rj.png" alt="" />
			<p>基础软件</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'NarBar',
	setup() {},
})
</script>
<style lang="scss" scoped>
.navBar {
    margin-top: .3rem   ;
	width: 100%;
	height: .9rem;
    display: flex;
    justify-content: space-around;
	.navItem {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
		img {
			width: 0.5rem;
			height: 0.5rem;
			border-radius: 50%;
		}
		p {
			font-size: 0.15rem;
			
		}
	}
}
</style>
