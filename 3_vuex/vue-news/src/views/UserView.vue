<template>
  <div>
    <h1>User View</h1>
    <div>
      <p>User: {{ user.id }}</p>
      <p>Created: {{ user.created }}</p>
    </div>
  </div>
</template>

<script>
import { fetchUser } from "../api/index.js";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    // var userName = 'davidson';
    var name = this.$route.params.userName;
    console.log(name);
    fetchUser(name)
      .then(({ data }) => {
        console.log(name);
        this.user = data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
