import { CloudinaryContext } from "cloudinary-react";
import { useRef, useState } from "react";
import Spinner from "../../resources/Spinner.js";
import uploadPhoto from "../../services/uploadPhoto.js";
import Button from "./Button.js";
import classes from "./UploadComponent.module.css";

const cloudName = "diabcvdy0";
const apiKey = "539928657558346";
const apiSecret = "uKC1m1_7RdSqK1EowMBJ3gt6BiQ";

const UploadComponent = ({ setImage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const inputRef = useRef(null);
  const onUploadHandler = () => {
    inputRef.current.click();
  };
  const handleFileInputChange = async (e) => {
    try {
      setIsLoading(true);
      setHasError(null);
      const file = e.target.files[0];
      if (file.size > 5242880) {
        setImage("");
        throw new Error();
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "vz658y0u");
      setImage(await uploadPhoto(formData));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setHasError("File size exceeds 5 mb.");
    }
  };
  return (
    <CloudinaryContext
      cloudName={cloudName}
      apiKey={apiKey}
      apiSecret={apiSecret}
    >
      <input
        type="file"
        onChange={handleFileInputChange}
        ref={inputRef}
        style={{ display: "none" }}
      />
      <Button onClick={onUploadHandler}>
        {isLoading ? <Spinner w={15} h={15} /> : "Upload"}{" "}
      </Button>
      {hasError && <p className={classes.error}>{hasError}</p>}
    </CloudinaryContext>
  );
};

export default UploadComponent;
