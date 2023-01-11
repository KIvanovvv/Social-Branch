import React, { useEffect, useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./Posts.module.css";
const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `http://social-branch-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
      );
      const data = await response.json();
      const postsData = Object.values(data);
      setIsLoading(false);
      setHasLoaded(true);
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  if (!hasLoaded && isLoading) {
    console.log(`Loading....`);
    return (
      <ul className={classes.list}>
        <div className={classes.loading}>Loading ...</div>
      </ul>
    );
  }
  if (hasLoaded) {
    console.log(posts);
    return (
      <ul className={classes.list}>
        {posts.map((data) => {
          return (
            <li key={data.ownerId}>
              <div
                className={classes.img}
                style={{
                  backgroundImage: `url(${data.imageUrl})`,
                }}
              ></div>{" "}
              <p>
                <span className={classes.postName}>{data.ownerName} : </span>
                {data.content}
              </p>{" "}
              <div className={classes.btn_container}>
                <Button className={classes.btn}>Comments</Button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Posts;
