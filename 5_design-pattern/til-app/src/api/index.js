import axios from 'axios';
// import store from '../store/index';
import {
    setInterceptor
} from './interceptors';

function init() {
    return axios.create({
        // baseURL: 'http://localhost:3000'
        baseURL: process.env.VUE_APP_DEV_URL,
    });
}
const instance = init();

function initWithAuth() {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_URL}posts`,
    });
    return setInterceptor(instance);
}
const posts = initWithAuth();

function registerUser(userData) {
    return instance.post('signup', userData);
}

function loginUser(userData) {
    return instance.post('login', userData);
}

// function fetchPosts() {
//     return instance.get('a', {
//         headers : {
//             Authorization: store.state.token
//         }
//     });
// }

// function createPost(postData) {
//     return instance.post('posts', postData, {
//         headers: {
//             Authorization: store.state.token
//         }
//     });
// }

export {
    registerUser,
    loginUser,
    // fetchPosts,
    // createPost,
    posts
}