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
      <ul>
        <!-- <li v-for="item in items" :key="item.id"> -->
          <li v-for="item in listItems" :key="item.id">
          <span>{{ item.title }}</span>
          <router-link to="'/news/' + item.news">{{ item.user }}</router-link>
          <!-- , {{ item.user }} -->
        </li>
      </ul>
      <!-- {{ this.$store.state.news }} -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { fetchNews } from "../api/index.js";
import DataFetchingMixin from '../mixins/DataFetchingMixin.js';

export default {
  mixins: [
    DataFetchingMixin
  ],
  data() {
    return {
      items: [],
      isLoading: true
    };
  },
  // methods: {
  //   fetchItems() {
  //     const url = "https://api.hnpwa.com/v0/news/1.json";
  //     console.log("요청 시작");
  //     this.isLoading = true;
  //     axios
  //       .get(url)
  //       .then(response => {
  //         // console.log(response);
  //         console.log("요청 완료");
  //         this.items = response.data;
  //         this.isLoading = false;
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // },
  // async created() {
  //   // this.fetchItems();
  //   // this.$store.dispatch('FETCH_NEWS');

  //   // fetchNews()
  //   // 	.then(res => {
  //   // 		this.items = res.data;
  //   // 	})
  //   // 	.catch(err => console.log(err));

  //   // const response = await fetchNews();
  //   this.items = response.data;
  //   // return response;
  // }
};
</script>

<style></style>
