const posts = [
  { name: "Post 1", content: "Content 1" },
  { name: "Post 2", content: "Content 2" },
  { name: "Post 3", content: "Content 3" },
];

const showPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost, callback) => {
  return new Promise((resolve, reject) => {
    if (newPost && callback) {
      posts.push(newPost);
      callback();

      resolve();
    } else {
      reject();
    }
  });
};

async function listPosts() {
  showPosts();
  try {
    await addPost({ name: "Post 4", content: "Content 4" }, showPosts);
  } catch (error) {
    console.log("Bir Hata Alındı!" + error);
  }
}

listPosts();

// node script.js
