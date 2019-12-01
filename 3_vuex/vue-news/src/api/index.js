import axios from "axios";

// const config = {
//     url: ''
// }

const instance = axios.create({
  baseURL: "https://api.hnpwa.com/v0/",
  // headers: {},
  timeout: 5000
});

function fetchNews() {
  // const url = 'https://api.hnpwa.com/v0/news/1.json';
  // return axios.get(url);
  return instance.get("news/1.json");
}

function fetchAsk() {
  // const url = 'https://api.hnpwa.com/v0/ask/1.json';
  // return axios.get(url);
  return instance.get("ask/1.json");
}

function fetchJobs() {
  return instance.get("jobs/1.json");
}

function fetchUser(userName) {
  "https://api.hnpwa.com/v0/user/davideast.json";
  // 아래 두줄 같은 실행 라인
  // return instance.get('user/' + userName + '.json');
  return instance.get(`user/${userName}.json`);
}

function fetchItem() {
  return instance.get(`item/${id}.json`);
}

function fetchListData(listName) {
  return instance.get(`${listName}/1.json`);
}

export {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchListData
};
