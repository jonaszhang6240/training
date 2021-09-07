<!-- 1 
 头部栏 公司logo  剧中
 轮播图
 导航栏 =》 课程分类
 最新课程 =》最新课程展示 
 各类课程展示 =》  模型 ；动画 ； 特效
 会员专区
 二维码
 footbar    首页；学习列表；个人中心
-->
<template>
	<div class="indexWrap">
        <div class="header">
            高清艺术
        </div>
        <Swipe-Top></Swipe-Top>
        <NarBar></NarBar>
        <NewClass></NewClass>
        <ClassType v-for="(i,inx) in 4" :key="inx"></ClassType>
        <div class="footer"> 
            <div></div>
        </div>
        <FootBar></FootBar>
    </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
import NarBar from '@/components/NarBar.vue'
import SwipeTop from '@/components/SwipeTop.vue'
import NewClass from '@/components/NewClass.vue'
import ClassType from '@/components/ClassType.vue'
import FootBar from '@/components/FootBar.vue'
export default defineComponent({
	name: 'Home',
    components:{
        SwipeTop,
        NarBar,
        NewClass,ClassType,FootBar
    },
    setup(){

    }
})

</script>
<style lang="scss" scoped>
.indexWrap{
    .header{
        width: 100%;
        height: .5rem;
        background-color: #000;
        color: #fff;
        font-size: .25rem;
        text-align: center;
        line-height: .5rem;
    }
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
}
</style>