var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem(event){
            // alert();
            // newItemが空だったらここで処理終了
            if (this.newItem == '') return;
            var todo = {
                item: this.newItem
            };

            this.todos.push(todo);
            this.newItem = '';
        }
    }
})