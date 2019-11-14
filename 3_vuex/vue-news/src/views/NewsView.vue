<template>
  <div>
      <h1>News</h1>
      <!-- <div v-if="!isLoading">
        {{ items }}
      </div>
	  <div v-else>
		  데이터 로딩 중입니다.
	  </div> -->
	  <div>
		  {{ this.$store.state.news }}
	  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			items: [],
			isLoading: true,
		};
	},
	methods: {
		// fetchItems() {
		// 	const url = 'https://api.hnpwa.com/v0/news/1.json';
		// 	console.log('요청 시작');
		// 	this.isLoading = true;
		// 	axios
		// 		.get(url)
		// 		.then(response => {
		// 			// console.log(response);
		// 			console.log('요청 완료');
		// 			this.items = response.data;
		// 			this.isLoading = false;
		// 		})
		// 		.catch(error => {
		// 			console.log(error);
		// 		});
		// },
	},
	created() {
		// this.fetchItems();
		this.$store.dispatch('FETCH_NEWS');
	},
};
</script>

<style>
</style>