import Vue from "vue";
import Vuex from "vuex";
import { fetchJobs, fetchNews, fetchAsk } from "../api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    askItems: [],
    news: []
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setAsk(state, ask) {
      state.ask = ask;
    },
    setNews(state, news) {
      state.news = news;
    }
  },
  actions: {
    async FETCH_JOBS(context) {
      // return fetchJobs()
      //     .then(({
      //         data
      //     }) => {
      //         context.commit("setJobs", data);
      //         // state.jobs = data;
      //         console.log(data);
      //     })
      //     .catch(error => console.log(error));

      const response = await fetchJobs();
      // const {
      //     data
      // } = await fetchJobs();
      context.commit("setJobs", response.data);
      return response;
    },
    async FETCH_ASK(context) {
      // return fetchAsk()
      //     .then(({
      //         data
      //     }) => {
      //         context.commit("setAsk", data);
      //         console.log(data);
      //     }).catch(error => console.log(error));

      const response = await fetchAsk();
      context.commit("setAsk", response.data);
      return response;
    },
    async FETCH_NEWS(context) {
      // return fetchNews()
      //     .then(({
      //         data
      //     }) => {
      //         context.commit("setNews", data);
      //         console.log(data);
      //     }).catch(error => console.log(error));

      const response = await fetchNews();
      context.commit("setNews", response.data);
      return response;
    }
  }
});
