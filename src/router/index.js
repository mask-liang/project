import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () =>
    import ("../pages/login.vue")
const index = () =>
    import ("../pages/index.vue")
const manage = () =>
    import ("../pages/manage.vue")
const user = () =>
    import ("../pages/user.vue")
const news = () =>
    import ("../pages/news.vue")
const manageList = () =>
    import ("../pages/manageList.vue")
const manageAdd = () =>
    import ("../pages/manageAdd.vue")
const welcome = () =>
    import ("../pages/welcome.vue")
const banner = () =>
    import ("../pages/banner.vue")
export default new Router({
    routes: [{
            path: "/index",
            component: index,
            children: [{
                    path: "welcome",
                    component: welcome
                },
                {
                    path: "manage",
                    component: manage,

                    children: [{
                            path: "",
                            component: manageList,
                            name: "管理员管理",
                        },
                        {
                            path: "add",
                            component: manageAdd,
                            name: "添加管理员",
                        }
                    ]
                },
                {
                    path: 'banner',
                    component: banner,
                    name: "banner管理"
                },
                {
                    path: "user",
                    component: user,
                    name: "用户管理"
                },
                {
                    path: "news",
                    component: news,
                    name: "通知管理"
                },
                {
                    path: "",
                    redirect: "welcome"
                },
            ]
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "*",
            redirect: "/login"
        }
    ]
})