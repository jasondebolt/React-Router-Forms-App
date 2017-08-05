import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
// Use Postman to manually create some posts.
const API_KEY = '?key=JASONDEBOLT1234' // Choose any random key.

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
