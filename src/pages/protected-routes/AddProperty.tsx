import React from "react";
import StepOne from "../../components/add-property/StepOne";
import StepTwo from "../../components/add-property/StepTwo";
import StepThree from "../../components/add-property/StepThree";
import StepFour from "../../components/add-property/StepFour";
import StepFive from "../../components/add-property/StepFive";
import StepSix from "../../components/add-property/StepSix";
import StepSeven from "../../components/add-property/StepSeven";
import { AddPropertyContext } from "../../context/AddPropertyContext";
import { Backdrop, CircularProgress } from "@mui/material";
import "../../styles/components/addPropertiesSteps.css";

export default function AddProperty() {
  const { uploadPropertyToFirebase, uploadingProperty } =
    React.useContext(AddPropertyContext);

  return (
    <div style={{ padding: "50px 80px 120px 80px", position: "relative" }}>
      <section className="add-property-form">
        <form>
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
          <StepSix />
          <StepSeven />
          <div className="publish-button-container">
            <span className="publish-btn" onClick={uploadPropertyToFirebase}>
              Publish Property
            </span>
          </div>
        </form>
      </section>

      {/* backdrop */}
      <div>
        {uploadingProperty ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
