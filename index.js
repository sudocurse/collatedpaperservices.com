import Vue from 'vue'
import App from './App'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})

alert(4);
