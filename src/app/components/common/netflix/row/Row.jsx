

import React, { useRef } from "react";
import { Typography, Container, styled, Box } from "@mui/material";
// COMPONENTS COMMONS
// ICONS
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Thumbnail } from "../..";
import { BoxListMovies, BoxRow, BoxRowIndividually, RootRow, TypoTitleCategory, styleBiChevronLeft, styleBiChevronRight, styleLink } from "./StylesRow.";
// STYLES

//////////////////// EXPORT FUNCTION ////////////////////
export default function Row({ category, images }) {
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <RootRow maxWidth='xl'>
      <BoxRow>
        <Link to='#' style={styleLink}>
          <TypoTitleCategory variant='h5'>{category}</TypoTitleCategory>
        </Link>
        <BoxRowIndividually>
          <BiChevronLeft
            size={22}
            style={styleBiChevronLeft}
            onClick={() => handleClick("left")}
          />
          <BoxListMovies ref={rowRef}>
            {images?.map(( image, index ) => (
              <Thumbnail key={index} image={image} />
            ))}
          </BoxListMovies>
          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick("right")}
          />
        </BoxRowIndividually>
      </BoxRow>
    </RootRow>
  );
};


    // <div className='container'>
    //   <p className='title'>{category}</p>
    //   <div className='movies-list'>
    //     {/* .map() sur le tableau images présent dans chaque élément du JSON  */}
    //     {images.map((img, index) => {
    //       return <img key={index} alt='movie' src={img} />;
    //     })}
    //   </div>
    // </div>;