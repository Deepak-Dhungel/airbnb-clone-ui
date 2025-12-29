import React, { useContext } from "react";
import logo from "../../assets/images/airbnb-logo.png";
import MobileLogo from "../../assets/images/logo-icon.png";
import { BiSearch, BiGlobe } from "react-icons/bi";
import HeaderProfile from "./HeaderProfile";
import { NavLink } from "react-router-dom";
import "../../styles/components/headerStyles.css";
import { Box } from "@mui/material";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const Header = () => {
  const { loggedInUser, openLoginModal, setOpenLoginModal } = useContext(
    AuthenticationContext
  );
  return (
    <Box className="header_container">
      <Box className="app_logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="main_logo" />
          <img src={MobileLogo} alt="logo" className="mobile_logo" />
        </NavLink>
      </Box>

      <Box className="header_search_section">
        <Box className="search_place">Anywhere</Box>
        <Box className="search_days">Any week</Box>
        <Box className="search_guests">Add guests</Box>
        <Box className="search_icon">
          <BiSearch />
        </Box>
      </Box>

      <Box className="header_right_section">
        <Box
          className="airbnb_your_home"
          // onClick={() => setOpenLoginModal(true)}
        >
          {loggedInUser ? (
            <NavLink to="/add-property">Airbnb your home</NavLink>
          ) : (
            <span onClick={() => setOpenLoginModal(true)}>
              Airbnb your home
            </span>
          )}
          {/* <NavLink to="#">Airbnb your home</NavLink> */}
        </Box>
        <Box className="language_selector">
          <BiGlobe />
        </Box>
        <HeaderProfile />
      </Box>
    </Box>
  );
};

export default Header;
