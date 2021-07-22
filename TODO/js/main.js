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
                item: this.newItem,
                isDone: false
            };

            this.todos.push(todo);
            this.newItem = '';
        },
        deleteItem(index){
            // alert(index);
            this.todos.splice(index,1);
        }
    }
})