import React, { useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getPostsByQuery } from "../../../services/postServices.js";
import List from "./List.js";
import classes from "./Posts.module.css";
const Posts = (props) => {
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
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => clearTimeout(timer);
  }, [props.query]);
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
          return (
            <List
              data={data}
              key={data._id}
              modalVisible={props.modalVisible}
              setModalUserId={props.setModalUserId}
            />
          );
        })}
      </ul>
    );
  }
};

export default Posts;
