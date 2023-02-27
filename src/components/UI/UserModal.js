import Spinner from "../../resources/Spinner.js";
import Button from "./Button.js";
import classes from "./UserModal.module.css";

const UserModal = ({ modalLoading, user }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{modalLoading ? "Loading..." : user.username}</p>
      </div>
      <div className={classes.content}>
        {modalLoading && <Spinner w={260} h={260} />}
        {!modalLoading && (
          <>
            <div className={classes.left_side}>
              {" "}
              <div
                style={{
                  backgroundImage: `url(${user.imageUrl})`,
                }}
                className={classes.img}
              ></div>
            </div>
            <div className={classes.right_side}>
              <div className={classes.bio_container}>
                {" "}
                <p className={classes.bio_header}>Bio</p>
                <textarea
                  className={classes.bio_text}
                  defaultValue={
                    user.description
                      ? user.description
                      : "The user have not shared any information about himself..."
                  }
                  readOnly={true}
                  rows={5}
                  cols={35}
                />
              </div>

              <p className={classes.bio}>
                <span>Email: </span>
                {user.email}
              </p>
              <Button className={classes.btn}>Send message</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserModal;
