import React, { useContext, useEffect, useState } from "react";
import { getAllPosts } from "../../../services/postServices.js";
import StateContext from "../../../state-ctx/state-ctx.js";
import List from "./List.js";
import classes from "./Posts.module.css";
const Posts = ({ modalVisible,setModalUserId }) => {
  const ctx = useContext(StateContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setIsLoading(false);
      setHasLoaded(true);
      setPosts(postsData);
    };
    fetchPosts();
    ctx.setPostUpdated(false);
  }, [ctx.postUpdated]);
  if (!hasLoaded && isLoading) {
    return (
      <ul className={classes.list}>
        <div className={classes.loading}>Loading ...</div>
      </ul>
    );
  }

  if (hasLoaded) {
    return (
      <ul className={classes.list}>
        {posts.map((data) => {
          return (
            <List data={data} key={data._id} modalVisible={modalVisible} setModalUserId={setModalUserId}/>
          );
        })}
      </ul>
    );
  }
};

export default Posts;
