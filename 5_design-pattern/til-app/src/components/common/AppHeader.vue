<template>
  <header>
    <div>
      <template v-if="!isLogin">
        <router-link to="/signup">회원 가입 | </router-link>
        <router-link to="/login"> 로그인</router-link>
      </template>
    </div>
    <!-- <div>{{ this.$store.state.username }}</div> -->
    <div>
      <span>{{ this.$store.state.username }}</span>
      <button v-if="!isLogin" type="button" @click="logout">로그아웃</button>
    </div>

  </header>
</template>

<script>
// 두번째 방법
import { mapGetters } from 'vuex';

export default {
  methods: {
    async logout() {
      await this.$store.dispatch('LOGOUT');
      this.$router.push({
        path: '/',
      });
    }
  },
  computed: {
    // 두번째 방법
    ...mapGetters(['isLogin']),
    
    // 첫번째 방법
    isLogin() {
      return this.$store.getters.isLogin;
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
