<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <!-- <div>
      <label for="nickname">NickName: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div> -->
    <button type="submit">로그인</button>
    <p>{{ errorMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "../api/index";
import { saveAuthToCookie, saveUserToCookie} from '../utils/cookies';

function initData() {
  return {
    username: "",
    password: "",
    errorMessage: ''
  };
}
export default {
  data() {
    return initData();
  },
  methods: {
    async submitForm() {
        try {
            const { data } = await loginUser({
                username : this.username,
                password: this.password
            });
            console.log(data);
            this.$store.commit('setUsername', data.user.username);
            // saveUserToCookie(data.user);
            saveUserToCookie(data.user.username);
            this.$store.commit('setToken', data.token);
            saveAuthToCookie(data.token);
				    this.$router.push('/home');
        } catch (error) {
            console.log(error);
            this.errorMessage = error;
        }
    }
  }
};
</script>

<style></style>
