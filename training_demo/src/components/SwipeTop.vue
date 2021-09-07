<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
			<van-swipe-item v-for="(i,inx) in 5" :key="inx">{{i}}
                <div class="swipeTitle">{{i}}</div>
            </van-swipe-item>
			
		</van-swipe>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'SwipeTop',
	setup() {},
})
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
.my-swipe{
    height: 2rem;
}
.swipeTitle{
    width: 100%;
    height: .5rem;
    background-color: rgba(255, 255, 255,.5);
    position: absolute;
    bottom: 0;
}
</style>
