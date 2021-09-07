<template>
	<div>
        <van-tabbar v-model="active">
  <van-tabbar-item icon="eye-o">发现</van-tabbar-item>
  <van-tabbar-item icon="label-o">学习</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>

</van-tabbar>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent,ref  } from 'vue'
export default defineComponent({
	name: 'SwipeTop',
	setup() {

        const active = ref(0);
    return { active };
    },
})
</script>
<style lang="scss" scoped>

</style>
