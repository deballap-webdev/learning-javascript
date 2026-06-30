// Higher Order FUnctions

// A hgher order function is a fuction that does at least one of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as a result

import { posts } from "./posts.js";

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPostsValue);
