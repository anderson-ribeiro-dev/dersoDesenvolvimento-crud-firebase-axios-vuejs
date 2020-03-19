import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        //instâncias vue-axios, pode ter várias
        Vue.prototype.$http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL
        })
    }

    
})