import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BiSearch } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import "../../styles/components/mobileNavBarStyles.css";
import { Box } from "@mui/material";

export default function MobileNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="mobile_navbar_container"
        sx={{
          "@media screen and (max-width:600px)": {
            position: "fixed",
            bottom: "0",
            right: "0 !important",
            left: "0",
            border: ".5px solid #ddd",
            color: "var(--accent) !important",
          },
          "@media screen and (min-width:600px)": {
            display: "none",
          },
        }}
      >
        <BottomNavigationAction
          label="Explore"
          icon={<BiSearch style={{ fontSize: "16px", marginBottom: "5px" }} />}
        />
        <BottomNavigationAction
          label="Wishlists"
          icon={<BsHeart style={{ fontSize: "16px", marginBottom: "5px" }} />}
        />
        <BottomNavigationAction
          label="Log in"
          icon={
            <HiOutlineUserCircle
              style={{ fontSize: "16px", marginBottom: "5px" }}
            />
          }
        />
      </BottomNavigation>
    </Box>
  );
}
