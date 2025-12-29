import React from "react";
import Image from "../../assets/images/46c0c87f-d9bc-443c-9b64-24d9e594b54c.webp";
import { AiFillStar } from "react-icons/ai";
import { DocumentData } from "firebase/firestore";
import { PropertyDetailsType } from "../../types/propertyDetails.type";
import { Skeleton } from "@mui/material";

import "../../styles/components/propertyCardStyles.css";

function PropertyCardSkeleton() {

  return (
    <div className="property_card_container">
      <Skeleton
        variant="rectangular"
        width={300}
        height={250}
        sx={{ borderRadius: "16px" }}
      />
      <div className="property_card_info">
        <div className="card_info_left">
          <span className="property_title">
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </span>
          <span className="property_location">
            <Skeleton variant="text" sx={{ fontSize: ".5rem" }} width="80%" />
          </span>
          <span className="property_price">
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="80%" />
          </span>
        </div>
        <div className="card_info_right">
          <div className="property_ratings">
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCardSkeleton;
