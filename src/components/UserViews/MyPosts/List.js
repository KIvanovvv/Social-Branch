import { useEffect, useState } from "react";
import {
  createComment,
  getComments,
  updatePostById,
} from "../../../services/postServices.js";
import Button from "../../UI/Button.js";
import classes from "./Posts.module.css";

export default function List(props) {
  //TODO  create function createComment, create model in server for comments
  const [commentsVisiable, setCommentsVisiable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsUpdated, setCommentsUpdated] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [postContent, setPostContent] = useState(props.data.content);
  const [isPostUpdated, setIsPostUpdated] = useState(false);

  async function onChangePost(e) {
    // setPostContent(e.target.value);
  }

  function onEditHandler() {
    setIsEditActive(true);
  }

  function onSaveHandler(e) {
    setPostContent((curr) => {
      curr =
        e.target.parentElement.parentElement.querySelector("textarea").value;
      return curr;
    });
    setIsEditActive(false);
    setIsPostUpdated(true);
  }

  useEffect(() => {
    async function updatePost() {
      console.log(postContent);
      console.log(props.data._id);
      await updatePostById(props.data._id, postContent);
      setIsPostUpdated(false);
    }
    if (isPostUpdated) {
      updatePost();
    }
  }, [isPostUpdated]);

  function updateData() {
    console.log(postContent);
  }

  function onChangeHandler(e) {
    setContent((cur) => e.target.value);
  }

  async function addComment() {
    if (!content) {
      return;
    }
    await createComment(content, props.data._id);
    setCommentsUpdated(true);
    setContent("");
  }

  useEffect(() => {
    async function loadComments() {
      setIsLoading(true);
      setComments(await getComments(props.data._id));
      setIsLoading(false);
    }

    loadComments();
    setCommentsUpdated(false);
  }, [commentsUpdated]);

  async function viewComments() {
    setCommentsVisiable((curr) => !curr);
    if (commentsVisiable) {
    }
  }
  return (
    <>
      <li key={Math.random()}>
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${props.data.imageUrl})`,
          }}
        ></div>{" "}
        <div className={classes.content_post}>
          <span className={classes.postName}>{props.data.ownerUsername} </span>
          <textarea
            readOnly={isEditActive ? false : true}
            rows={5}
            defaultValue={postContent}
          ></textarea>{" "}
        </div>
        <div className={classes.btn_area}>
          {isEditActive && (
            <>
              <p>Edit your post</p>
              <Button className={classes.save_btn} onClick={onSaveHandler}>
                Save
              </Button>
            </>
          )}
          <div className={classes.btn_container}>
            <Button onClick={viewComments} className={classes.btn}>
              Comments
            </Button>
            <Button className={classes.edit_btn} onClick={onEditHandler}>
              Edit
            </Button>
            <Button className={classes.delete_btn}>Delete</Button>
          </div>
        </div>
      </li>
      {commentsVisiable && (
        <div className={classes.comment_section}>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <>
              {" "}
              <div className={classes.actions}>
                <input
                  type="text"
                  placeholder="Your comment..."
                  onChange={onChangeHandler}
                  value={content}
                />
                <Button onClick={addComment}>Publish</Button>
              </div>
              <ul>
                {comments.map((x) => (
                  <li>
                    <div
                      className={classes.img_comment}
                      style={{
                        backgroundImage: `url(${x.imageUrl})`,
                      }}
                    ></div>
                    <p className={classes.comment_p}>
                      <span className={classes.comment_author}>
                        {x.username}:
                      </span>{" "}
                      {x.content}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}
