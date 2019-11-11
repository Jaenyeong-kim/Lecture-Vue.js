<template>
  <div>
    <h1>Jobs</h1>
    <div>
      {{ items }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			items: [],
		};
	},
	methods: {
		fetchItems() {
			const url = 'https://api.hnpwa.com/v0/jobs/1.json';
			axios
				.get(url)
				.then(response => {
					this.items = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		this.fetchItems();
	},
};
</script>

<style>
</style>