import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function MyProfileComponent() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = () => {
    setAnchorEl(null);
    navigate("/edit-profile");
  };

  const handleChangePW = () => {
    setAnchorEl(null);
    navigate("/change-password");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("logintoken");
    navigate("/");
  };

  return (
    <div>
      <RxAvatar
        className="text-cyan-800 font-bold"
        style={{ fontSize: "48px", cursor: "pointer" }}
        onClick={handleClick}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: "White", // Background color of the menu
            borderRadius: "8px", // Border radius of the menu
            border: "3px solid #3b82f6",
          },
        }}
      >
        <MenuItem className="text-red-800 border-3" onClick={handleViewProfile}>
          View Profile
        </MenuItem>
        <MenuItem className="text-red-800 border-3" onClick={handleChangePW}>
          Change Password
        </MenuItem>
        <MenuItem className="text-cyan-800 border-b" onClick={handleLogout}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MyProfileComponent;
