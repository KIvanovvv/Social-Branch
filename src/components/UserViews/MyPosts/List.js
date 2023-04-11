import { useEffect, useState } from "react";
import {
  createComment,
  deletePostById,
  getComments,
  updatePostById,
} from "../../../services/postServices.js";
// import StateContext from "../../../state-ctx/state-ctx.js";

import Button from "../../Utils/Button.js";
import classes from "./Posts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/index.js";
import Spinner from "../../../resources/Spinner.js";

export default function List(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [commentsVisiable, setCommentsVisiable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsUpdated, setCommentsUpdated] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [postContent, setPostContent] = useState(props.data.content);
  const [isPostUpdated, setIsPostUpdated] = useState(false);
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);

  async function onConfirmDeleteHandler() {
    await deletePostById(props.data._id, userData);
    setIsDeleteActive(false);
    setPostDeleted(true);
    dispatch(userActions.updateUserPosts());
  }

  function onRejectDeleteHandler() {
    setIsDeleteActive(false);
  }

  function onDeleteHandler() {
    setIsDeleteActive(true);
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
      await updatePostById(props.data._id, postContent, userData);
      setIsPostUpdated(false);
    }
    if (isPostUpdated) {
      updatePost();
    }
  }, [isPostUpdated]);

  function onChangeHandler(e) {
    setContent(e.target.value);
  }

  async function addComment() {
    if (!content) {
      return;
    }
    await createComment(content, props.data._id, userData);
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
      <li>
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
          {isDeleteActive && (
            <div className={classes.delete_container}>
              <p>Are you sure ?</p>

              <div className={classes.delete_container_btns}>
                <Button
                  className={classes.delete_yes_btn}
                  onClick={onConfirmDeleteHandler}
                >
                  Yes
                </Button>
                <Button
                  className={classes.delete_no_btn}
                  onClick={onRejectDeleteHandler}
                >
                  No
                </Button>
              </div>
            </div>
          )}
          <div className={classes.btn_container}>
            <Button
              onClick={viewComments}
              className={classes.btn}
              disabled={isEditActive || isDeleteActive ? true : false}
            >
              Comments
            </Button>
            <Button
              className={classes.edit_btn}
              onClick={onEditHandler}
              disabled={isEditActive || isDeleteActive ? true : false}
            >
              Edit
            </Button>
            <Button
              className={classes.delete_btn}
              onClick={onDeleteHandler}
              disabled={isEditActive || isDeleteActive ? true : false}
            >
              Delete
            </Button>
          </div>
        </div>
      </li>
      {commentsVisiable && (
        <div className={classes.comment_section}>
          {isLoading && <Spinner w={100} h={100} />}
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
              <ul className={classes.comments_ul}>
                {comments.map((x) => (
                  <li key={x._id}>
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
