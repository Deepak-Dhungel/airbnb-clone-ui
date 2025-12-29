import { IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { AddPropertyContext } from "../../context/AddPropertyContext";
import { PropertyInfoType } from "../../types/propertyDetails.type";

function StepFour() {
  // const [guest, setGuest] = React.useState<number>(1);
  // const [bedroom, setBedroom] = React.useState<number>(1);
  // const [bed, setBed] = React.useState<number>(1);
  // const [bathroom, setBathroom] = React.useState<number>(1);

  // const { propertyInfo, setPropertyInfo, propertyDetails } =
  //   React.useContext(AddPropertyContext);

  // React.useEffect(() => {
  //   propertyInfo.guestNo = guest;
  //   propertyInfo.bedrooms = bedroom;
  //   propertyInfo.beds = bed;
  //   propertyInfo.bathrooms = bathroom;
  //   // console.log("PropertyInfo:", propertyInfo);
  //   // console.log("Property Details: ", propertyDetails);
  // }, [bathroom, bed, bedroom, guest, propertyDetails, propertyInfo]);

  const { propertyDetails, setPropertyDetails } =
    useContext(AddPropertyContext);

  const [propertyInformation, setPropertyInformation] =
    useState<PropertyInfoType>({
      guestNo: 1,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    });

  function handleGuestValue(value: number) {
    const updatedValue = propertyInformation.guestNo + value;
    setPropertyInformation({ ...propertyInformation, guestNo: updatedValue });
  }

  function handleBedroomValue(value: number) {
    const updatedValue = propertyInformation.bedrooms + value;
    setPropertyInformation({ ...propertyInformation, bedrooms: updatedValue });
  }

  function handleBedValue(value: number) {
    const updatedValue = propertyInformation.beds + value;
    setPropertyInformation({ ...propertyInformation, beds: updatedValue });
  }

  function handleBathroomValue(value: number) {
    const updatedValue = propertyInformation.bathrooms + value;
    setPropertyInformation({ ...propertyInformation, bathrooms: updatedValue });
  }

  useEffect(() => {
    setPropertyDetails({
      ...propertyDetails,
      propertyInfo: propertyInformation,
    });
  }, [propertyInformation]);

  return (
    <div
      className="property-details-container"
      style={{
        marginTop: "80px",
        width: "600px",
      }}
    >
      <h3 className="step-title">Share some basics about your place</h3>
      <span className="desc">
        You'll add more details later, such as bed types.
      </span>
      <div
        className="property-details-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Number of Guests */}
        <div
          className="items"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--dark-gray)",
            padding: "20px 0",
          }}
        >
          <span className="title">Guests</span>
          <div
            className="button"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              aria-label="minus"
              onClick={() => {
                if (propertyInformation.guestNo > 1) {
                  handleGuestValue(-1);
                }
              }}
            >
              <AiOutlineMinusCircle />
            </IconButton>
            <span style={{ width: "30px", textAlign: "center" }}>
              {propertyInformation.guestNo}
            </span>
            <IconButton aria-label="plus" onClick={() => handleGuestValue(+1)}>
              <AiOutlinePlusCircle />
            </IconButton>
          </div>
        </div>

        {/* Bedrooms */}
        <div
          className="items"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--dark-gray)",
            padding: "20px 0",
          }}
        >
          <span className="title">Bedrooms</span>
          <div
            className="button"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              aria-label="minus"
              onClick={() => {
                if (propertyInformation.bedrooms > 1) {
                  handleBedroomValue(-1);
                }
              }}
            >
              <AiOutlineMinusCircle />
            </IconButton>

            <span style={{ width: "30px", textAlign: "center" }}>
              {propertyInformation.bedrooms}
            </span>
            <IconButton
              aria-label="plus"
              onClick={() => handleBedroomValue(+1)}
            >
              <AiOutlinePlusCircle />
            </IconButton>
          </div>
        </div>

        {/* Beds */}
        <div
          className="items"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--dark-gray)",
            padding: "20px 0",
          }}
        >
          <span className="title">Beds</span>
          <div
            className="button"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              aria-label="minus"
              onClick={() => {
                if (propertyInformation.beds > 1) {
                  handleBedValue(-1);
                }
              }}
            >
              <AiOutlineMinusCircle />
            </IconButton>

            <span style={{ width: "30px", textAlign: "center" }}>
              {propertyInformation.beds}
            </span>
            <IconButton aria-label="plus" onClick={() => handleBedValue(+1)}>
              <AiOutlinePlusCircle />
            </IconButton>
          </div>
        </div>

        {/* Bathrooms */}
        <div
          className="items"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--dark-gray)",
            padding: "20px 0",
          }}
        >
          <span className="title">Bathrooms</span>
          <div
            className="button"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              aria-label="minus"
              onClick={() => {
                if (propertyInformation.bathrooms > 1) {
                  handleBathroomValue(-1);
                }
              }}
            >
              <AiOutlineMinusCircle />
            </IconButton>

            <span style={{ width: "30px", textAlign: "center" }}>
              {propertyInformation.bathrooms}
            </span>
            <IconButton
              aria-label="plus"
              onClick={() => handleBathroomValue(+1)}
            >
              <AiOutlinePlusCircle />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
