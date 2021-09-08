<template>
	<div class="joinWrap">
		<h3 class="joinTitle">请先登录</h3>
		<div class="input">
			<van-cell-group inset>
				<!-- 输入任意文本 -->
				<van-field v-model="text" label="用户名" />
				<!-- 输入密码 -->
				<van-field v-model="password" type="password" label="密码" />
			</van-cell-group>
		</div>
        <div class="btn">
<van-button round type="primary" color = "blue">登录</van-button>
<van-button round type="primary" color = "orange" @click="gotoReg()"> 注册 </van-button>
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
import { defineComponent,ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	name: 'Join',
	setup() {
        const text = ref("")
        const password = ref("")
            const router = useRouter()
        const gotoReg = ()=>{
            router.push("/register")
        }

        return {
            text,
            password,
            gotoReg
        }

    },
})
</script>

<style lang="scss" scoped>


.joinWrap{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 95vh;
    align-content: center;
    margin-top: -1rem;

    .joinTitle{
        font-size: .5rem;
        color: rgb(3, 126, 40);
        margin: .2rem;
    }
    .input{
        font-size: .18rem;
    }
    .btn{
        height: .7rem;
        width: 70%;
        display: flex;
        justify-content: space-around;
        
    }
    
}

</style>
