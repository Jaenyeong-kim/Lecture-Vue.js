import axios from 'axios';

// const config = {
//     url: ''
// }

const instance = axios.create({
    baseURL: 'https://api.hnpwa.com/v0/',
    // headers: {},
    // timeout: 1000
});

function fetchNews() {
    // const url = 'https://api.hnpwa.com/v0/news/1.json';
    // return axios.get(url);
    return instance.get('news/1.json');
}

function fetchAsk() {
    // const url = 'https://api.hnpwa.com/v0/ask/1.json';
    // return axios.get(url);
    return instance.get('ask/1.json');
}

export {
    fetchNews,
    fetchAsk
};