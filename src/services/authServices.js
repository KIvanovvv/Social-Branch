export async function register(email, username, password, imageUrl) {
  const response = await fetch(`http://localhost:3030/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      imageUrl: imageUrl,
      username: username,
    }),
  });
  const data = await response.json();
  return data;
}

export async function login(email, password) {
  try {
    const response = await fetch(`http://localhost:3030/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status !== 200) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}
