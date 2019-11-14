import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginView from '../views/LoginView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import NotFoundView from '../views/NotFoundView.vue'

import store from '../store/index.js'

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
            component: NewsView,
            // beforeEnter(routeTo, routeFrom, next) {
            beforeEnter(to, from, next) {
                console.log('access');
                store.dispatch('FETCH_JOBS')
                    .then(() => next())
                    .catch(error => console.log(error));

                // var response = fetchNews();
                // this.$store.commit('setNews', response.data);

                // var isAdmin = true;
                // if (isAdmin) {
                //     next();
                // }
            }
        },
        // TODO 
        // URL : jobs, ask
        // 컴포넌트 이름 : JobsView, AskView
        {
            path: '/jobs',
            component: JobsView,
            beforeEnter(to, from, next) {
                console.log('access fetchJobs');
                store.dispatch('FETCH_JOBS')
                    .then(() => next())
                    .catch(error => console.log(error));
            }
            // TODO: beforeEnter 사용, 페이지 진입 전에 데이터 요청
        },
        {
            path: '/ask',
            component: AskView,
            beforeEnter(to, from, next) {
                console.log('access fetchAsk');
                store.dispatch('FETCH_ASK')
                    .then(() => next())
                    .catch(error => console.log(error));
            }
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