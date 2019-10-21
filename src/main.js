// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'

// 请求拦截 config-你发送的参数
axios.interceptors.request.use(config => {
    config.a = 10;
    return config
})

//响应拦截 config-后端返你的数据
axios.interceptors.response.use(config => {
    console.log("==响应拦截==")
    console.log(config)
    if (config.data.code == -1) { //未登录
        router.replace("/login")
        return;
    }
    return config;
})

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

import commonCom from './components'
for (var i in commonCom) {
    Vue.component(i, commonCom[i])
}

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next();
        return;
    }

    if (to.path.includes("manage")) {
        if (sessionStorage.getItem("isAdmin") == '0') {
            next()
        } else {
            next("/login")
        }
        return;
    }
    if (to.path.includes("user")) {
        if (sessionStorage.getItem("isAdmin") == '0' || sessionStorage.getItem("isAdmin") == '1') {
            next()
        } else {
            next("/login")
        }
        return;
    }
    next()
})

import './assets/css/reset.css'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})