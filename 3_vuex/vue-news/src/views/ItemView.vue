<template>
  <div>
      <h1>
          Item View
      </h1>
  </div>
</template>

<script>
import { fetchItem } from '../api/index.js';

export default {
	data() {
		return {
			item: {},
		};
	},
	async created() {
		const id = this.$route.params.askId;
		console.log(id);
		const response = await fetchItem(id);
		this.item = response.data;

		// fetchItem().then(response => {
		// 	this.item = response.data;
		// });
		// .catch(error => console.log(error));
	},
};
</script>

<style>
</style>