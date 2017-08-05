// Note that we don't have to specify a file because we are importing from index.js
// See https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_folders_as_modules

/*
If there is no package.json file present in the directory, then Node.js will
attempt to load an index.js or index.node file out of that directory.
For example, if there was no package.json file in the above example,
then require('./some-library') would attempt to load:

./some-library/index.js
./some-library/index.node
*/
import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload.data); // [post1, post2, post3, ...]
      // We want { 4: post, ...}
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state
  }
}
