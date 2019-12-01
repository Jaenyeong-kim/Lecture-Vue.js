<template>
  <div>
      <h1>Today I learned</h1>
      <button class="create" @click="routedAdd">+</button>
      <div>
          <ul>
              <ListItem v-for="post in posts" :post="post" :key="post._id">
              </ListItem>
              <!-- <li  v-for="post in posts" :key="post.id">
                  <h4>{{  post.title }}</h4>
                  <p>{{ post.contents }}</p>
                  <span>{{ post.createdAt }}</span>
              </li> -->
          </ul>
      </div>
  </div>
</template>

<script>
import { fetchPosts } from '../api/posts.js';
import ListItem from '@/components/posts/ListItem.vue';

// 엑시오스 응답
// {
//     headers: {},
//     data: {
//         posts: {}
//     },
//     status: {},
//     config: {}
// }

// const response = 응답
// const { data } = 응답;
// const { data : { posts }} = 응답;
// console.log(posts);

export default {
    component: {
        ListItem
    },
    data() {
        return {
            posts: []
        }
    },
    // components: {
    //     CreateForm,
    // },
    async created() {
        // fetchPosts();
        // const {
        //     data : { posts },
        // } = fetchPosts();
        const { data } = await fetchPosts();
        this.posts = data.posts;
        console.log(data.posts);
    },
    methods: {
        routedAdd() {
            this.$router.push('/add');
        }
    }
}
</script>

<style scoped>
.create {
	width: 60px;
	height: 60px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	background: skyblue;
	border: 3px solid white;
	outline: none;
}
</style>