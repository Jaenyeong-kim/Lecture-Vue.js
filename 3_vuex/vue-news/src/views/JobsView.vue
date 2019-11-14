<template>
  <div>
    <h1>Jobs</h1>
	<!-- store의 state 접근시 아래와 같이 -->
	<!-- {{ this.$store.state.jobs }} -->
    <!-- <div> -->
      <!-- {{ items }} -->
	  <!-- {{ jobs }} -->
    <!-- </div> -->
	<div>
		  {{ this.$store.state.jobs }}
	  </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchJobs } from '../api/index.js';
import { mapState } from 'vuex';

export default {
	// data 와 computed 안에 변수명은 달라야 함
	// data() {
	// 	return {
	// 		// items: [],
	// 		jobs: [],
	// 	};
	// },
	computed: mapState(['jobs']),
	// computed: { jobs: []},
	methods: {
		// fetchItems() {
		// 	const url = 'https://api.hnpwa.com/v0/jobs/1.json';
		// 	axios
		// 		.get(url)
		// 		.then(response => {
		// 			this.items = response.data;
		// 		})
		// 		.catch(error => {
		// 			console.log(error);
		// 		});
		// },
	},
	// TODO : 스토어의 액션을 이용, 화면에 ask 아이템 30개 뿌리기
	created() {
		// this.fetchItems();
		// fetchJobs()
		// 	.then(({ data }) => {
		// 		this.jobs = data;
		// 	})
		// 	.catch(error => conso.log(error));
		this.$store.dispatch('FETCH_JOBS');
	},
};
</script>

<style>
</style>