import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginView from '../views/LoginView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter);

// export default new VueRouter();
// export const router = new VueRouter();
export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/news'
        },
        // // 로그인 페이지 내용
        // {
        //     // 로그인 페이지 URL
        //     path: '/login',
        //     // 로그인 페이지 컴포넌트
        //     component: LoginView
        // },
        {
            path: '/news',
            component: NewsView
        },
        // TODO 
        // URL : jobs, ask
        // 컴포넌트 이름 : JobsView, AskView
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '*',
            component: NotFoundView
        }
        // { 코드 스플리팅
        //     path: '*',
        //     component: () => import('../views/NotFoundView.vue'),
        // }
    ]
});