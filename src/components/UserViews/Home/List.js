import { useEffect, useState } from "react";
import { createComment, getComments } from "../../../services/postServices.js";
import Button from "../../UI/Button.js";
import classes from "./Posts.module.css";

export default function List(props) {
  const [commentsVisiable, setCommentsVisiable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  function onChangeHandler(e) {
    setContent(e.target.value);
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

  function ProfileClickHandler(id) {
    props.setModalUserId(id)
    props.modalVisible(true);
  }
  return (
    <>
      <li key={props.data._id}>
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${props.data.imageUrl})`,
          }}
          onClick={() => ProfileClickHandler(props.data.ownerId)}
        ></div>{" "}
        <div className={classes.content_post}>
          <span className={classes.postName}>{props.data.ownerUsername} </span>
          <textarea
            readOnly={true}
            defaultValue={props.data.content}
            rows={5}
          ></textarea>{" "}
        </div>
        <div className={classes.btn_container}>
          <Button onClick={viewComments} className={classes.btn}>
            Comments
          </Button>
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
