import { Box, Fade } from "@mui/material";
import Lottie from "lottie-react";
import { shimmerPizza } from "../../assets/assets";

const ShimmerPizza = ({ show }) => {
  return (
     <Fade in={show} timeout={500}>
    <Box
      maxWidth="1440px"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={""}
      mx={"auto"}
    >
      <Box width={300} bgcolor={""}>
        <Lottie animationData={shimmerPizza} loop />
      </Box>
    </Box>
    </Fade>
  );
};

export default ShimmerPizza;
