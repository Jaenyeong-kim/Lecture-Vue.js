<template>
  <div>
    <!-- <header> -->
      <!-- <router-link to="/login">Login</router-link> ||  -->
      <!-- <a href="/login">Login</a> -->
      <!-- <router-link to="/news">News</router-link> ||
      <router-link to="/jobs">Jobs</router-link> ||
      <router-link to="/ask">Ask</router-link>
    </header> -->
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
</script>

<style scoped>
/* 공통 CSS 적용 */
@import './assets/css/common.css';
</style>