import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiEqualizerLine } from "react-icons/ri";
import "../../styles/components/mobileHeaderStyles.css";

const MobileHeader = () => {
  return (
    <div className="mobile_header_container">
      <div className="mobile_header_search">
        <div className="search_icon">
          <BiSearch />
          <div className="search_text">
            <span className="title_text">Anywhere</span>
            <span className="text_description">Any week . Add guests</span>
          </div>
        </div>

        <div className="filter_icon">
          <RiEqualizerLine />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
