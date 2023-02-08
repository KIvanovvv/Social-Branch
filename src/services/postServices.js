export async function createPost(content) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`http://localhost:3030/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      content: content,
      imageUrl: user.imageUrl,
      ownerUsername: user.username,
      ownerId: user._id,
    }),
  });
  const data = await response.json();
  console.log(data);
}

export async function getAllPosts() {
  const response = await fetch(`http://localhost:3030/posts/`);
  const data = await response.json();
  return data.reverse();
}

export async function createComment(content, postId) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`http://localhost:3030/posts/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      content: content,
      postId: postId,
      username: user.username,
      imageUrl: user.imageUrl,
    }),
  });
  // const data = await response.json();
  // console.log(data);
}
export async function getComments(postId) {
  const response = await fetch(
    `http://localhost:3030/posts/comments/${postId}`
  );
  const data = await response.json();
  console.log(data);
  return data.reverse();
}

export async function getUserPosts(id) {
  const response = await fetch(`http://localhost:3030/posts/user/${id}`);
  const data = await response.json();
  return data.reverse();
}
