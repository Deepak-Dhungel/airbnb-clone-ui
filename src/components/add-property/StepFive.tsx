import React, { useContext, useEffect, useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";
import {
  TbAirConditioningDisabled,
  TbBrandCampaignmonitor,
} from "react-icons/tb";

import { amenitiesData } from "../../constants/propertyConstants";
import { AddPropertyContext } from "../../context/AddPropertyContext";
// import { AmenitiesType } from "../../types/propertyDetails.type";
import "../../styles/components/addPropertiesSteps.css";

function StepFive() {
  // const { amenities, setAmenities, handleAmenities } =
  //   React.useContext(AddPropertyContext);

  const { propertyDetails, setPropertyDetails } =
    useContext(AddPropertyContext);

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleAmenities = (item: string) => {
    if (selectedAmenities?.includes(item)) {
      const removeAmenities = selectedAmenities?.filter((am) => am !== item);
      setSelectedAmenities(removeAmenities);
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  useEffect(() => {
    // console.log(selectedAmenities);
    setPropertyDetails({ ...propertyDetails, amenities: selectedAmenities });
  }, [selectedAmenities]);

  return (
    <div
      className="amenities-container"
      style={{
        marginTop: "80px",
        width: "600px",
      }}
    >
      <h3 className="step-title">Tell guests what your place has to offer</h3>
      <div
        className="amenities-card-wrapper"
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {amenitiesData.map((item) => {
          return (
            <div
              key={item.name}
              className="category-card"
              style={{
                background: selectedAmenities?.includes(item.name)
                  ? "var(--bg-gray)"
                  : "",
                border: selectedAmenities?.includes(item.name)
                  ? "2px solid var(--dark-gray)"
                  : "",
              }}
              onClick={() => {
                handleAmenities(item.name);
              }}
            >
              {item.name === "Wifi" ? (
                <AiOutlineWifi size={30} />
              ) : item.name === "TV" ? (
                <TbBrandCampaignmonitor size={30} />
              ) : item.name === "Washing Machine" ? (
                <GiWashingMachine size={30} />
              ) : (
                <TbAirConditioningDisabled size={30} />
              )}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepFive;
