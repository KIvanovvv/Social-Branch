import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getUserPosts } from "../../../services/postServices.js";
import StateContext from "../../../state-ctx/state-ctx.js";
import List from "./List.js";
import classes from "./Posts.module.css";
import UserState from "../../../state-ctx/userState.js";
const Posts = () => {
  const ctx = useContext(StateContext);
  const { userData } = useContext(UserState);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getUserPosts(userData._id);
      setIsLoading(false);
      setHasLoaded(true);
      setPosts(postsData);
    };
    fetchPosts();
    ctx.setPostUpdated(false);
  }, [ctx.postUpdated, ctx, userData]);
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
        {posts.length > 0 ? (
          posts.map((data) => {
            return <List data={data} key={data._id} />;
          })
        ) : (
          <li className={classes.empty_list}>
            <p>You haven't made any posts yet.</p>
          </li>
        )}
      </ul>
    );
  }
};

export default Posts;
