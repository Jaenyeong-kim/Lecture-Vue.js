<template>
  <div>
      <h1>News View</h1>
        <div>{{ todos }}</div>
  </div>
</template>

<script>
export default {
    async asyncData() {
        const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
        return {
            todos: json
        }

        // .then(response => response.json())
        // .then(json => console.log(json))
    }
}
</script>

<style>

</style>