<!-- 学习课程页面 
    判断是否登录-》 ！进入登录界面   = 进入学习列表
    侧边栏  我的课程 ； 收藏夹 ；推荐课程=》（最新课程，根据推荐）
    展示栏  课程 =》点击进入详情页
-->
<template>
	<div>
		<Join v-if="isJoin"></Join>
		<div class="studyList">
			<div class="listTitle">
				<van-sidebar v-model="active">
					<van-sidebar-item title="正在学习" />
					<van-sidebar-item title="已完成学习" />
					<van-sidebar-item title="推荐课程" />
				</van-sidebar>
			</div>
            <div class="listItem">
                <div class="classList" v-for="(i ,inx) in 9" :key="inx"></div>
            </div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent,ref } from 'vue'
import Join from '@/components/Join.vue'
export default defineComponent({
	name: 'Study',
	components: {
		Join,
	},
	setup() {
        const isJoin = ref(false)
        const active = ref(0)
        return {
            isJoin,
            active
        }
    },
})
</script>

<style lang="scss" scoped>

.studyList{
overflow: scroll;
    display: flex;
    justify-content: space-between;
    .listTitle{
        width: 30%;

        .van-sidebar{
            width: 100%;
            text-align: center;
            height: 90vh;

        }
    }
        .listItem{
            overflow: scroll;
            width: 65%;
            height: 90vh;
            .classList{
                width: 95%;
                height: 1rem;

                margin-bottom: .2rem;
                margin-top: .2rem;
                border-radius: 6px;
                box-shadow: 1px 2px 2px rgb(119, 116, 116);
            }
        }

}
</style>
