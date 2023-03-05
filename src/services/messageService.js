const host = "https://relieved-knickers-ox.cyclic.app";

export async function sendMessage(
  content,
  reciverId,
  senderId,
  senderImage,
  senderUsername,
  accessToken
) {
  try {
    const response = await fetch(`${host}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": accessToken,
      },
      body: JSON.stringify({
        content,
        reciverId,
        senderId,
        senderImage,
        senderUsername,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getMessagesByUserId(userId) {
  try {
    const response = await fetch(`${host}/messages/${userId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function viewMessage(msgId, user) {
  try {
    const response = await fetch(`${host}/messages/viewed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify({
        msgId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
