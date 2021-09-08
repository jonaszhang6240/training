<!-- 最新课程展示页
    获取最新课程数据
    循环生成
 -->
<template>
	<div class="newClass">
		<van-nav-bar
			
			left-text="最新课程"
			right-text="更多>>"
			
		/>
            <div class="classList">
                <div v-for="(i , inx) in 4" :key = "inx">
                    <img src="../assets/class.jpg" alt="">
                    <p class="titleName">title</p>
                    <p>免费</p>
                </div>
    </div>
	</div>

</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'NewClass',
	setup() {},
})
</script>
<style lang="scss" scoped>

.newClass {

    .classList{
        
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 4rem;
        div{
            flex:  0 0 45%;
            box-shadow:  1px 1px 2px rgb(214, 213, 213);
            margin-top: .1rem;
            border-radius: 5px;
            padding: .1rem;
            display: flex;
            align-content: space-between;
            flex-wrap: wrap;
            img{
                width: 100%;
                height: 60%;
                border-radius: 3px;
            }
            .titleName{
             width: 100%;
             margin-top: -.18rem;
             font-size: .18rem;
            }
            p{
                font-size: .12rem;
            }
        }
    }
}
</style>
