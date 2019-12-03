/*import Vue from 'vue/dist/vue'

var app = new Vue({
    el: '#app',
    data: {
        message: "this is about"
    }
})
*/

import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

new Vue({
    render: h => h(HelloWorld)
}).$mount('#app')
