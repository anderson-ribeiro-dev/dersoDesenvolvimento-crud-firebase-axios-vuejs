import Vue from 'vue'
import axios from 'axios'

//setar headers, axios global
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'aplplications/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        //instâncias vue-axios, pode ter várias
        Vue.prototype.$http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
                "Authorization": "abc123"
                //somente get
                // get: {
                //     "Authorization": "abc123"
                // }
            }
        })

        //intercepatando requisições, mudar métodos 
        Vue.prototype.$http.interceptors.request.use(config => {
           // eslint-disable-next-line no-console
           console.log(config.method)
           //trannsforma métodos
        //    if(config.method === 'post') {
        //        config.method = 'put'
        //    }
           return config
        }, error => Promise.reject(error))
        //interceptando resposta, coloca id dentro e usuarios
        Vue.prototype.$http.interceptors.response.use(response => {
            // const array = []
            // for(let chave in response.data) {
            //     array.push({id: chave}, ...response.data[chave])
            // }

            // response.data = array
            return response
        }, error => Promise.reject(error))
    }

    
})