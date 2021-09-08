    <!-- 主页 -->
<template>
<div>
            <Swipe-Top></Swipe-Top>
        <NarBar></NarBar>
        <NewClass></NewClass>
        <ClassType v-for="(i,inx) in 4" :key="inx"></ClassType>
        <div class="footer"> 
            <div></div>
        </div>
</div>

</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
import NarBar from '@/components/NarBar.vue'
import SwipeTop from '@/components/SwipeTop.vue'
import NewClass from '@/components/NewClass.vue'
import ClassType from '@/components/ClassType.vue'

export default defineComponent({
	name: 'IndexWrap',
	setup() {},
	components: {
		SwipeTop,
		NarBar,
		NewClass,
		ClassType,

	},
})
</script>
<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 3rem;
        background-color: #2DB5E9;
        position: relative;
        margin-top: 1rem;
        div{
            width: 1rem;
            height: 1rem;
            background-color: #fff;
            position: absolute;
            top: .5rem;
            right: .5rem;
        }
    }
</style>
