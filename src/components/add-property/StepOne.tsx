import React, { useEffect, useState } from "react";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineApartment } from "react-icons/md";
import { TbBuildingCottage } from "react-icons/tb";
import { propertyCategories } from "../../constants/propertyConstants";
import { AddPropertyContext } from "../../context/AddPropertyContext";
import { GiConsoleController } from "react-icons/gi";
import "../../styles/components/addPropertiesSteps.css";

function StepOne() {
  const { propertyDetails, setPropertyDetails } =
    React.useContext(AddPropertyContext);

  const [category, setCategory] = useState("");

  useEffect(() => {
    setPropertyDetails({ ...propertyDetails, propertyCategory: category });
  }, [category]);

  return (
    <div className="category-container">
      <h3 className="step-title">Which of these best describes your place?</h3>
      <div className="category-card-wrapper">
        {propertyCategories.map((cat, index) => {
          return (
            <div
              key={index}
              className="category-card"
              style={{
                background: category === cat.name ? "var(--bg-gray)" : "white",
                border:
                  category === cat.name ? "2px solid var(--dark-gray)" : "",
              }}
              // onClick={() => handleSelectedCategory(item.name)}
              onClick={() => setCategory(cat.name)}
            >
              <BsHouseDoor size={30} />
              {cat.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepOne;
