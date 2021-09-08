import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IndexWrap from '@/components/IndexWrap.vue'
import Study from '@/components/Study.vue'
import Register from '@/components/Register.vue'
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
            {
                path:'',
                redirect:'/indexWrap'
            },
			{
				path: '/indexWrap',
				name: 'indexWrap',
				component: IndexWrap,
			},
			{
				path: '/study',
				name: 'study',
				component: Study,
			},
			{
				path: 'register',
                name: 'register',
                component: Register
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
