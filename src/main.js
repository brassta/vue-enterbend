import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import mainStyle from './assets/style/main.less'

library.add(faCoffee, faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(mainStyle)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
})
    .$mount('#app')

