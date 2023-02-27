const host = "https://relieved-knickers-ox.cyclic.app";

export async function createPost(content, user) {
  try {
    const response = await fetch(`${host}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        imageUrl: user.displayImage || user.imageUrl,
        ownerUsername: user.username,
        ownerId: user._id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getAllPosts() {
  const response = await fetch(`${host}/posts/`);
  const data = await response.json();
  return data.reverse();
}

export async function createComment(content, postId) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`${host}/posts/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      content: content,
      postId: postId,
      username: user.username,
      imageUrl: user.displayImage,
    }),
  });
  const data = await response.json();
  return data;
}
export async function getComments(postId) {
  const response = await fetch(`${host}/posts/comments/${postId}`);
  const data = await response.json();

  return data.reverse();
}

export async function getUserPosts(id) {
  const response = await fetch(`${host}/posts/user/${id}`);
  const data = await response.json();
  return data.reverse();
}

export async function updatePostById(id, content) {
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`${host}/posts/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      content: content,
      _id: id,
    }),
  });
  const data = await response.json();
  return data;
}

export async function deletePostById(id) {
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`${host}/posts/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      _id: id,
    }),
  });
  const data = await response.json();
  return data;
}

export async function getPostsByQuery(query) {
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const response = await fetch(`${host}/posts/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({
      query: query,
    }),
  });
  const data = await response.json();
  return data.reverse();
}
