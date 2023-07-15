import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// LAYOUTS
import { DropdownNavbar } from "../../";
// STYLES
import { BoxDropdownNavbar, RootNavbar, styleImgLogo, styleLink } from "./StylesNavbar";
// UTILS IMGS
import logoNetflix from "../../../../utils/assets/imgs/netflix/logoNetflix.png"

export default function Navbar() {
  //////////////////// EFECT SCROLL NAVBAR ////////////////////
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  //////////////////// RETURN ////////////////////
  return (
    <RootNavbar>
      <Link href='/' style={styleLink}>
        <img
          alt='logoNetflix'
          src={logoNetflix}
          //   height={120}
          //   width={120}
          style={styleImgLogo}
        />
        <Link style={styleLink} to='/'>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Accueil
          </Typography>
        </Link>
        <Link style={styleLink} to='tvProgrammes'>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Programmes TV
          </Typography>
        </Link>
      </Link>
      <BoxDropdownNavbar>
        <DropdownNavbar />
      </BoxDropdownNavbar>
    </RootNavbar>
  );
}
