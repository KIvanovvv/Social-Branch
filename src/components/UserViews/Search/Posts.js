import React, { useContext, useEffect, useState } from "react";
import {
  getAllPosts,
  getPostsByQuery,
} from "../../../services/postServices.js";
import StateContext from "../../state-ctx/state-ctx.js";
import List from "./List.js";
import classes from "./Posts.module.css";
const Posts = (props) => {
  const ctx = useContext(StateContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPostsByQuery(props.query);
      setIsLoading(false);
      setHasLoaded(true);
      setPosts(postsData);
    };
    //TODO add setTimeoutt
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => clearTimeout(timer);
  }, [props.query]);
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
          return <List data={data} key={data._id} />;
        })}
      </ul>
    );
  }
};

export default Posts;
