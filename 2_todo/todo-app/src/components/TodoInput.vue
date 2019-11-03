<template>
  <div>
      <input type="text" v-model="inputText" v-on:keyup.enter="addTodo">
      <!-- <input type="text" @input="updateSth" @value="sth"> -->
      <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        clearInput: function() {
            this.inputText = '';
        },
        addTodo: function() {
            // 예전에 썼던 방법(파라미터로 event넘겨서 처리) > v-on:keyup.enter 로 대체
            // if (event.key === 'Enter') {
            //     console.log('added', this.inputText);
            //     var value = this.inputText;
            //     localStorage.setItem(value, value);    
            // }
            // console.log('added', this.inputText);
            var value = this.inputText;
            this.$emit('add', value);
            // localStorage.setItem(value, value); // 

            // localStorage.setItem('vue-todo', [{}]);
            // axios.post('/todos', {
            //     title: this.inputText
            // });

            this.clearInput();

            // var items = [];
            // items.push({ title: '1' })
            // localStorage.setItem('vue-todo', items)
            // JSON.parse();
            // JSON.stringify();
            // axios.post('/todos', {
            //   title: this.inputText
            // });
        }
    }
}
</script>

<style>

</style>