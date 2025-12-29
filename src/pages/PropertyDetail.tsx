import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import "../styles/pages/property-detail.css";
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";
import { amenitiesData } from "../constants/propertyConstants";
import {
  TbAirConditioningDisabled,
  TbBrandCampaignmonitor,
} from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { ImageList, ImageListItem } from "@mui/material";

const PropertyDetail = () => {
  const { propertyId } = useParams();
  const [loadingPropertyDetail, setLoadingPropertyDetail] = useState(false);
  const [singlePropertyDetail, setSinglePropertyDetail] =
    useState<DocumentData>();

  async function getSinglePropertyData() {
    setLoadingPropertyDetail(true);

    const docRef = doc(db, "properties", `${propertyId}`);
    try {
      const docData = await getDoc(docRef);
      if (docData) {
        setSinglePropertyDetail(docData.data());
        setLoadingPropertyDetail(false);
      }
    } catch (error) {
      console.log("Error getting single property data", error);
    }
  }

  useEffect(() => {
    getSinglePropertyData();
    // console.log(propertyDetail);
  }, []);

  return (
    <>
      <div className="single_property_container">
        <>
          <div className="property_gallery">
            <ImageList
              variant="quilted"
              cols={3}
              gap={8}
              sx={{ margin: "0 0 0 8px", borderRadius: "16px" }}
            >
              {singlePropertyDetail?.images.map((item: string) => (
                <ImageListItem key={item}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt={item}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <div className="property_details">
            <div className="property_title">
              {singlePropertyDetail?.generalInfo.title}
            </div>
            <div className="property_info">
              <span className="guests">
                {singlePropertyDetail?.propertyInfo.guestNo} guests
              </span>
              <span className="bedrooms">
                {singlePropertyDetail?.propertyInfo.bedrooms} bedrooms
              </span>
              <span className="beds">
                {singlePropertyDetail?.propertyInfo.beds} beds
              </span>
              <span className="bathroom">
                {singlePropertyDetail?.propertyInfo.bathrooms} bathroom
              </span>
            </div>
            <div className="property_reviews">
              <AiFillStar />
              <span>4.5</span>
            </div>
          </div>
          <div className="property_description">
            {singlePropertyDetail?.generalInfo.description}
          </div>
          <div className="property_amenities">
            <div className="amenities_title">What this place offers</div>
            <div className="amenity_item">
              <AiOutlineWifi size={20} />
              Wifi
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default PropertyDetail;
