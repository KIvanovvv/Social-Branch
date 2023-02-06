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
  return data;
}
