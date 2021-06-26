var app = new Vue({
    el: '#app',
    data: {
        message:"Hello World!",
        url: 'https://jp.vuejs.org',
        toggle:true,
        languages:[
            {messages:"JavaScript"},
            {messages:"Ruby"},
            {messages:"Python"}
        ]
    },
    methods: {
        clickHandler: function(){
            this.message = 'Clicked!'
        }
    }
})