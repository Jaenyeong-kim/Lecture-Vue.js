import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

// export default new VueRouter({
const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login' 
        },
        {
            path: "/signup",
            component: () => import("../views/SignupView.vue")
        },
        {
            path: "/login",
            component: () => import("../views/LoginView.vue")
        },
        {
            path: '/home',
            component: () => import('../views/HomeView.vue'),
            beforeEnter(to, from, next) {
                if (!store.getters.isLogin) {
                    console.log('로그인 하세요');
                    next('/login');
                     return;
                }
                next();
            }
        },
        {
            path: '/add',
            component: () => import('../views/AddView.vue'),
            meta: {auth: true}
        },
        {
            path: '*',
            component: () => import('../views/NotFoundView.vue')
        },
    ]

});

router.beforeEach((to, from, next) => {
    console.log(to.meta.auth);
    if (to.meta.auth ) {
        !store.getters.isLogin ? next('/login') : next();
        return;
        // if (!store.getters.isLogin) {
        //     console.log('로그인이 필요합니다');
        //     next('/login');
        //     return;
        // }
        // next();
    }
    next();
});

export default router;