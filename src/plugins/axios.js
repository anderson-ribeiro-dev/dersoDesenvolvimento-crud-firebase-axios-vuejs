import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        //instâncias vue-axios, pode ter várias
        Vue.prototype.$http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL
        })

        //intercepatando requisições
        Vue.prototype.$http.interceptors.request.use(config => {
           // eslint-disable-next-line no-console
           console.log(config.method)
           //trannsforma métodos
        //    if(config.method === 'post') {
        //        config.method = 'put'
        //    }
           return config
        })
    }

    
})