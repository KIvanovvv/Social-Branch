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

export async function changeUsernameById(id, username) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    const response = await fetch(`http://localhost:3030/users/change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify({
        _id: id,
        username: username,
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

export async function changePasswordById(id, password) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    const response = await fetch(
      `http://localhost:3030/users/change/password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": user.accessToken,
        },
        body: JSON.stringify({
          _id: id,
          password: password,
        }),
      }
    );
    if (response.status !== 200) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function changeImageById(id, imageUrl) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    const response = await fetch(`http://localhost:3030/users/change/image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify({
        _id: id,
        imageUrl: imageUrl,
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

export async function changeDescriptionById(id, description) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    const response = await fetch(
      `http://localhost:3030/users/change/description`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": user.accessToken,
        },
        body: JSON.stringify({
          _id: id,
          description: description,
        }),
      }
    );
    if (response.status !== 200) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function updateHappy(id, imageUrl) {
  try {
    const response = await fetch(`http://localhost:3030/users/moods/happy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        imageUrl: imageUrl,
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

export async function updateSad(id, imageUrl) {
  try {
    const response = await fetch(`http://localhost:3030/users/moods/sad`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        imageUrl: imageUrl,
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

export async function updateAngry(id, imageUrl) {
  try {
    const response = await fetch(`http://localhost:3030/users/moods/angry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        imageUrl: imageUrl,
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
