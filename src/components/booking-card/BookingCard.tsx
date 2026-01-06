import React from "react";
import "../../styles/components/bookingCard.css";
import "../../styles/components/headerStyles.css";
import { FaAngleDown } from "react-icons/fa6";

function BookingCard() {
  return (
    <div className="container">
      <span className="card_title">Add dates for prices</span>
      <div className="booking_inputs">
        <div className="dates">
          <input type="date" />
          <input type="date" />
        </div>
        <div className="guests_input">
          <span>guests</span>
          <span>1 guest</span>
          <span className="down_icon">
            <FaAngleDown />
          </span>
        </div>
      </div>
      <button className="check_availability_btn">Check Availability</button>
    </div>
  );
}

export default BookingCard;
