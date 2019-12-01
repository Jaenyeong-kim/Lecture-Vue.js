import { posts } from './index.js';

// function fetchPosts() {
//     return instance.get('a', {
//         headers: {
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

// Read
function fetchPosts() {
    return posts.get('/');
}

// Create
function createPost(postData) {
    return posts.post('/', postData);
}

export {
    fetchPosts,
    createPost
};