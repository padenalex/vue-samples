import Vue from 'vue/dist/vue'
import HelloWorld from '../components/HelloWorld.vue'

var app = new Vue({
    el: '#app',
    data: {
        message: "this is index "
    },
    components: {
        HelloWorld
    }
    
})