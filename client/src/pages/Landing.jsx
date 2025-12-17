import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { Box } from "@mui/material";
import HeroSection from "../components/landingPage/HeroSection";
import Recommendation from "../components/landingPage/Recommendation";
import ShimmerPizza from "../components/shimmer/ShimmerPizza";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ShimmerPizza show={loading}/>;
  }
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Header />
      <HeroSection />
      <Recommendation />
    </Box>
  );
};

export default Landing;
