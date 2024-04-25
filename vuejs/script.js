const app = Vue.createApp({
    template: '<h1>Olá, {{name}}</h1><button v-on:click="increaseCount">Contador: {{count}}</button>',
    data(){
        return{
            name: 'Michelly',
            count: 0
        }
    },
    methods:{
        increaseCount(){
            this.count++
        }
    }
})


app.mount('#app')