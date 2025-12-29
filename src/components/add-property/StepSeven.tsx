import React, { useContext, useEffect, useState } from "react";
import { AddPropertyContext } from "../../context/AddPropertyContext";

function StepSeven() {
  // const [title, setTitle] = React.useState<string>("");
  // const [description, setDescription] = React.useState<string>("");
  // const [price, setPrice] = React.useState<string>("");

  // const { generalInfo, propertyDetails } = React.useContext(AddPropertyContext);

  // calling fn handleGeneralInfo()
  // React.useEffect(() => {
  //   generalInfo.title = title;
  //   generalInfo.description = description;
  //   generalInfo.price = price;
  // }, [description, generalInfo, price, title]);

  const { propertyDetails, setPropertyDetails } =
    useContext(AddPropertyContext);

  const [generalInformation, setGeneralInformation] = useState({
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    setPropertyDetails({ ...propertyDetails, generalInfo: generalInformation });
  }, [generalInformation]);

  return (
    <div
      className="general-info-container"
      style={{
        marginTop: "80px",
        width: "600px",
      }}
    >
      <h3 className="step-title">General Information</h3>

      <div
        className="general-info-wrapper"
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          className="property-title-wrapper"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <label htmlFor="property-title">Give your property a title</label>
          <input
            type="text"
            placeholder="Add title here..."
            id="property-title"
            // required
            style={{
              padding: "20px",
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid var(--dark-gray)",
            }}
            onChange={(e) =>
              setGeneralInformation({
                ...generalInformation,
                title: e.target.value,
              })
            }
          />
        </div>

        <div
          className="property-desc-wrapper"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <label htmlFor="property-desc">Create your description</label>
          <textarea
            placeholder="Add title here..."
            id="property-desc"
            // required
            rows={10}
            style={{
              padding: "20px",
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid var(--dark-gray)",
            }}
            onChange={(e) =>
              setGeneralInformation({
                ...generalInformation,
                description: e.target.value,
              })
            }
          />
        </div>

        <div
          className="property-price-wrapper"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <label htmlFor="property-price">Now, set your price</label>
          <input
            placeholder="Rs.2000 per night"
            id="property-price"
            // required
            style={{
              padding: "20px",
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid var(--dark-gray)",
            }}
            onChange={(e) =>
              setGeneralInformation({
                ...generalInformation,
                price: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StepSeven;
