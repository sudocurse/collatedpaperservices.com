import Vue from 'vue'
import App from './App'
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'

Vue.config.productionTip = false 
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
var app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})

var app22 = new Vue({
    el: '#app22',
    data: {
        message: 'hello vue!'
    }
})
