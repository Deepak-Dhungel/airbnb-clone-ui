import React, { useEffect, useState } from "react";
import { AddPropertyContext } from "../../context/AddPropertyContext";

function StepThree() {
  const { propertyDetails, setPropertyDetails } =
    React.useContext(AddPropertyContext);

  const [propertyLocation, setPropertyLocation] = useState("");

  useEffect(() => {
    setPropertyDetails({ ...propertyDetails, location: propertyLocation });
  }, [propertyLocation]);

  return (
    <div
      className="location-container"
      style={{
        marginTop: "80px",
      }}
    >
      <h3 className="step-title">Where's your place located?</h3>
      <div
        className="location-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter your address"
          // required
          style={{
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #DDDDDD",
            width: "600px",
          }}
          onChange={(e) => setPropertyLocation(e.target.value)}
        />
      </div>
    </div>
  );
}

export default StepThree;
