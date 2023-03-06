const cloudName = "diabcvdy0";

async function uploadPhoto(formData) {
  try {
    const respone = await fetch(
      `http://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!respone.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = await respone.json();

    return data.secure_url;
    // setImage(data.secure_url);
  } catch (err) {
    throw new Error(err.message);
  }
}

export default uploadPhoto;
