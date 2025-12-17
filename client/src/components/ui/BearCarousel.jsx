import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { BEAR_IMAGES } from "../../assets/assets";

const BearCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BEAR_IMAGES.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* Image wrapper */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {BEAR_IMAGES.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`bear-${i + 1}`}
            sx={{
              width: "100%",
              flexShrink: 0,
              display: "block",
              objectFit: "contain",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BearCarousel;
