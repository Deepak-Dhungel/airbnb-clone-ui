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
import { CgMenuGridO } from "react-icons/cg";
import BookingCard from "../components/booking-card/BookingCard";
import { RiFlagFill } from "react-icons/ri";

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
  }, []);

  return (
    <>
      <div className="single_property_wrapper">
        <div className="single_property_container">
          {/* gallery section */}
          <div className="property_gallery">
            <div className="gallery_main">
              <img src={singlePropertyDetail?.images[0]} alt="property main" />
            </div>

            <div className="gallery_grid">
              {singlePropertyDetail?.images.map((img: string) => (
                <img src={img} alt="property main" className="img_grid_item" />
              ))}
            </div>

            <div className="all_photos_btn">
              <CgMenuGridO size={18} />
              <span>Show all photos</span>
            </div>
          </div>
          {/* gallery section ends */}

          <div className="property_details">
            <div className="left_side">
              <div className="title_info">
                <span className="property_title">
                  {singlePropertyDetail?.generalInfo.title}
                </span>
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
              </div>

              <div className="prop_desc">
                <span>{singlePropertyDetail?.generalInfo.description}</span>
              </div>

              <div className="property_amenities">
                <div className="amenities_title">What this place offers</div>
                <div className="amenity_item">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {" "}
                    <AiOutlineWifi size={20} />
                    Wifi
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {" "}
                    <AiOutlineWifi size={20} />
                    Wifi
                  </span>
                </div>
              </div>
            </div>

            {/* property reservation section */}
            <div className="right_side">
              <div className="reservation_section">
                <BookingCard />
              </div>

              <div className="report_property">
                <RiFlagFill size={16} />
                <span>Report this listing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
