<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in todoItems" v-bind:key="index">
              {{ todoItem }}, {{ index }}
              <button v-on:click="removeItem(todoItem, index)">remove</button>    
          </li>
          
          <!-- <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li> -->
      </ul>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
    // app.vue 파일로 이동
    // data() {
    //     return {
    //         todoItems: []
    //     }
    // },
    props: ['todoItems'],
    methods: {
        removeItem: function(todoItem, index) {
            this.$emit('remove', todoItem, index);
            // this.todoItems.splice(index, 1);
            // localStorage.removeItem(index);
            // axios.delete('todos/' + todo.id);
        },
        // fetchItems: function() {
        //     for (var i = 0; i < localStorage.length; i++) {
        //         // if (value !== 'loglevel:webpack-dev-server') {}
        //         var value = localStorage.key(i);
        //         this.todoItems.push(value);
        //     }
        //     // localStorage.getItem();
        //     // axios.get('todos');
        // }, 
        clearItems: function() {
            this.todoItems = [];
        }
    },
    // created: function() {
    //     // console.log('created');
    //     this.fetchItems();
    //     console.log(this);
    //     var vm = this;
    //     bus.$on('clear', function() {
    //         console.log('받았다', this);
    //         // this.todoItems = [];
    //         vm.clearItems();
    //     });
    //     // window.addEventListener('click', callback);
    //     // bus 보다 vuex 사용 추천
    // },
    // beforeDestroy: function() {
    //     // 이벤트 버스 사용하면 꼭 다 해제 해줘야함
    //     bus.$off('clear');
    // }
}
</script>

<style>

</style>