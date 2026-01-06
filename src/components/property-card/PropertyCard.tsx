import { AiFillStar } from "react-icons/ai";

import { PropertyDetailsType } from "../../types/propertyDetails.type";
import "../../styles/components/propertyCardStyles.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

type PropertyCardType = {
  item: PropertyDetailsType;
};

function PropertyCard({ item }: PropertyCardType) {
  return (
    <Link to={`property/${item.id}`} className="property_card_container">
      <img src={item.images[0]} alt="property" />
      <div className="property_card_info">
        <div className="card_info_left">
          <span className="property_title">{item.generalInfo.title}</span>
          {/* <span className="property_location">
            <IoLocationSharp size={16} />
            {item.location}
          </span> */}
          <span className="property_price">
            $ {item.generalInfo.price} / Night
          </span>
        </div>
        {/* <div className="card_info_right">
          <div className="property_ratings">
            <AiFillStar />
            4.5
          </div>
        </div> */}
      </div>
    </Link>
  );
}

export default PropertyCard;
