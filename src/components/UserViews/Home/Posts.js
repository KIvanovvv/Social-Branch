import React, {  useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getAllPosts } from "../../../services/postServices.js";
import List from "./List.js";
import classes from "./Posts.module.css";
import { useSelector } from "react-redux";
const Posts = ({ modalVisible, setModalUserId }) => {
  const userPostsUpdated = useSelector(state=>state.user.userPostsUpdated)
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
  }, [userPostsUpdated]);
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
              modalVisible={modalVisible}
              setModalUserId={setModalUserId}
            />
          );
        })}
      </ul>
    );
  }
};

export default Posts;
