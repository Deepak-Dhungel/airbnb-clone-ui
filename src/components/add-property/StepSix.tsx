import React, { useEffect, useState } from "react";
import { AddPropertyContext } from "../../context/AddPropertyContext";
import { IoTrashOutline, IoImagesOutline } from "react-icons/io5";

function StepSix() {
  const { displayImage, setDisplayImage } =
    React.useContext(AddPropertyContext);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e?.target?.files;
      const selectedFilesArr = Array.from(file);

      selectedFilesArr.map((file) => {
        return setDisplayImage((prev) => [...prev, file]);
      });
    }
  }

  function removePhoto(photo: any) {
    setDisplayImage(displayImage.filter((item) => item !== photo));
  }

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div
      className="property-photo-container"
      style={{
        marginTop: "80px",
        width: "600px",
      }}
    >
      <h3 className="step-title">Add some photos of your house</h3>
      <span className="desc">
        You'll need 3 photos to get started. You can add more or make changes
        later.
      </span>

      <div className="photo-container">
        <input
          type="file"
          id="upload-btn"
          hidden
          multiple
          onChange={(e) => handleImageChange(e)}
        />
        <IoImagesOutline size={50} />
        <p>browse for photos</p>
        <label htmlFor="upload-btn">Browse</label>
      </div>

      <div className="selected-photos">
        {displayImage.map((i, index) => (
          <div className="selected-photo-container" key={index}>
            <img
              src={URL.createObjectURL(i)}
              alt="pic"
              width="100px"
              height="100px"
            />
            <span
              className="remove-selected-photo"
              onClick={() => removePhoto(i)}
            >
              <IoTrashOutline size={20} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepSix;
