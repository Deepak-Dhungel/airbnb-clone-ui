import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../styles/components/headerProfileStyles.css";
import Login from "../popup-modals/Login";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderProfile = () => {
  const {
    // userLoggedIn,
    // setUserLoggedIn,
    loggedInUser,
    openLoginModal,
    setOpenLoginModal,
  } = useContext(AuthenticationContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeProfileMenu = () => {
    setAnchorEl(null);
  };

  const handleLoginModal = () => {
    setOpenLoginModal(true);
    closeProfileMenu();
  };

  const userPhotoURL = loggedInUser?.photoURL;

  async function logoutCurrentUser() {
    await signOut(auth)
      .then((res) => {
        console.log("user signed out");
        // setUserLoggedIn(false);
      })
      .catch((error) => console.log("error while signing out", error));

    closeProfileMenu();
  }

  return (
    <div className="header_profile_container">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          padding: "0",
          minWidth: "unset",
          color: "var(--dark-gray)",
        }}
      >
        <GiHamburgerMenu style={{ fontSize: "18px", color: "var(--dark)" }} />

        <div className="user_avatar_section">
          {userPhotoURL ? (
            <img src={userPhotoURL} alt="a" className="loggedin_User_Avatar" />
          ) : (
            <FaUserCircle />
          )}
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeProfileMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: "250px",
            left: "unset !important",
            right: "40px",
            top: "70px !important",
            borderRadius: "10px",
            boxShadow:
              "0px 1px 12px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
          },
        }}
      >
        {loggedInUser ? (
          <Box>
            <MenuItem className="header-menu-item" onClick={closeProfileMenu}>
              <Link to="/my-account">My Account</Link>
            </MenuItem>
            <MenuItem className="header-menu-item">Manage Listings</MenuItem>
            <hr style={{ border: "0.5px solid var(--gray)" }} />
            <MenuItem className="header-menu-item" onClick={closeProfileMenu}>
              Airbnb your home
            </MenuItem>
            <MenuItem className="header-menu-item" onClick={logoutCurrentUser}>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem className="header-menu-item" onClick={handleLoginModal}>
              Sign up
            </MenuItem>
            <MenuItem className="header-menu-item" onClick={handleLoginModal}>
              Log in
            </MenuItem>
            <hr style={{ border: "0.5px solid var(--gray)" }} />
            <MenuItem className="header-menu-item" onClick={closeProfileMenu}>
              Airbnb your home
            </MenuItem>
            <MenuItem className="header-menu-item" onClick={closeProfileMenu}>
              Help centre
            </MenuItem>
          </Box>
        )}
      </Menu>

      {openLoginModal ? (
        // <Login modal={openLoginModal} setModal={setOpenLoginModal} />
        <Login open={true} />
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderProfile;
