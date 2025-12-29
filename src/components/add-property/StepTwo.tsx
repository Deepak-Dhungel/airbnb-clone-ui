import React, { useEffect, useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { typeOfPlaces } from "../../constants/propertyConstants";
// import { placeTypeData } from "../../MockData/data";
import { AddPropertyContext } from "../../context/AddPropertyContext";
import "../../styles/components/addPropertiesSteps.css";

function StepTwo() {
  const { propertyDetails, setPropertyDetails } =
    React.useContext(AddPropertyContext);

  const [placeType, setPlaceType] = useState("");

  useEffect(() => {
    setPropertyDetails({ ...propertyDetails, typeOfPlace: placeType });
  }, [placeType]);

  return (
    <div className="place-type-container">
      <h3 className="step-title">What type of place will guests have?</h3>
      <div className="place-card-wrapper">
        {typeOfPlaces.map((item, index) => {
          return (
            <div
              key={index}
              className="category-card"
              style={{
                background:
                  placeType === item.title ? "var(--bg-gray)" : "white",
                border:
                  placeType === item.title ? "2px solid var(--dark-gray)" : "",

                width: "600px",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => setPlaceType(item.title)}
            >
              <div
                className="text"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span>{item.title}</span>
                <span style={{ fontSize: "14px", color: "gray" }}>
                  {item.desc}
                </span>
              </div>
              <BsHouseDoor size={30} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepTwo;
