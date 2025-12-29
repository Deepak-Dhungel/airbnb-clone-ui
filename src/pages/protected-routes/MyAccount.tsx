import React, { useContext } from "react";
import "../../styles/pages/my-account.css";
import { TiBusinessCard } from "react-icons/ti";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const MyAccount = () => {
  const { loggedInUser } = useContext(AuthenticationContext);

  console.log(loggedInUser);

  return (
    <div className="my_account_container">
      <div className="account_header">
        <div className="title">Account</div>
        <div className="user_details">
          {loggedInUser?.displayName}, <span>{loggedInUser?.email}</span>
        </div>
      </div>
      <div className="account_cards_section">
        <div className="account_card">
          <TiBusinessCard size={40} />
          <div className="card_details">
            <span className="title">Login & security</span>
            <span className="desc">
              Update your password and secure your account
            </span>
          </div>
        </div>

        <div className="account_card">
          <IoShieldCheckmarkOutline size={40} />
          <div className="card_details">
            <span className="title">Payments & payouts</span>
            <span className="desc">
              Review payments, payouts, coupons, and gift cards
            </span>
          </div>
        </div>

        <div className="account_card">
          <HiOutlineCash size={40} />
          <div className="card_details">
            <span className="title">Personal Info</span>
            <span className="desc">
              Provide persoanl details and how we can reach you
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
