import axios from 'axios';

const API = axios.create({baseURL: 'https://bucketlistbravo.herokuapp.com/' });

//add something specific to each requests (axios instance)
//happens before the exports below
//need this because need to send token back to backend, and backend middleware verifies login
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){ //if profile exists
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        //middleware auth. token comes after
    }

    return req;
});

//prev controllers //step 3, then up to actions

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`)

export const signIn = (formData) => API.post('/user/signin', formData); //get data from database
export const signUp = (formData) => API.post('/user/signup', formData);
