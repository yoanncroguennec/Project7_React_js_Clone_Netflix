import React, { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
// UTILS IMGS
import dp from "../../../../utils/assets/imgs/netflix/dp.png"
// ICONS
import { AiOutlineUser } from "react-icons/ai"
const sizeIcon = 40

//////////////////// EXPORT FUNCTION ////////////////////
export default function DropdownNavbar() {
  //////////////////// MENU MUI ////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //////////////////// RETURN ////////////////////
  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={dp}
          alt='dp'
          height={60}
          width={60}
          style={{ borderRadius: "15px", cursor: "pointer" }}
        />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {/* <img
            alt=''
            // src={session?.user.image}
            style={{
              borderRadius: "50%",
              height: "60px",
              marginRight: "15px",
              width: "60px",
            }}
          /> */}
          <AiOutlineUser size={sizeIcon} />
          <Typography variant='h6'>Nom d'utilisateur</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6'>Email</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6'>Se déconnecter</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
