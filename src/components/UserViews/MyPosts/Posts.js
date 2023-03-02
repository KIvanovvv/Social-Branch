import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getUserPosts } from "../../../services/postServices.js";
import StateContext from "../../../state-ctx/state-ctx.js";
import List from "./List.js";
import classes from "./Posts.module.css";

const Posts = () => {
  const ctx = useContext(StateContext);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getUserPosts(user._id);
      setIsLoading(false);
      setHasLoaded(true);
      setPosts(postsData);
    };
    fetchPosts();
    ctx.setPostUpdated(false);
  }, [ctx.postUpdated, ctx, user._id]);
  if (!hasLoaded && isLoading) {
    return (
      <div className={classes.spinner_container}>
        <Spinner className={classes.spinner} w={400} h={400} />
      </div>
    );
  }

  if (hasLoaded) {
    return (
      <ul className={classes.list}>
        {posts.map((data) => {
          return <List data={data} key={data._id} />;
        })}
      </ul>
    );
  }
};

export default Posts;
