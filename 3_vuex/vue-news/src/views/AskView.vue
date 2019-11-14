<template>
  <div>
    <!-- <h1>Ask</h1>
      <div>
        {{ items }}
      </div> -->
      <ul>
        <li v-for="item in fetchedAsk" v-bind:key="item.id">
          {{  item.title }}
        </li>
      </ul>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchAsk } from '../api/index.js';

export default {
	data() {
		return {
			// items: [],
			askItems: [],
		};
	},
	computed: {
		fetchedAsk() {
			return this.$store.state.ask;
		},
	},
	methods: {
		// fetchItems() {
		// 	fetchAsk()
		// 		// .then(response => {
		// 		// 	this.items = response.data;
		// 		// })
		// 		// 해당 객체(response) 안에 변수(data)에 바로 접근 가능
		// 		.then(({ data }) => {
		// 			this.items = data;
		// 		})
		// 		.catch(error => {});
		// 	// const url = 'https://api.hnpwa.com/v0/ask/1.json';
		// 	// axios
		// 	// 	.get(url)
		// 	// 	.then(response => {
		// 	// 		console.log(response);
		// 	// 		this.items = response.data;
		// 	// 	})
		// 	// 	.catch(error => {
		// 	// 		console.log(error);
		// 	// 	});
		// },
	},
	created() {
		// this.fetchItems();
		this.$store.dispatch('FETCH_ASK');
	},
};
</script>

<style>
</style>