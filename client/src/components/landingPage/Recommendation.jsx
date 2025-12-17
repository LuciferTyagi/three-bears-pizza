import { Box, Button, Divider, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { RECOMMENDED_PIZZAS } from "../../utlis/constant";
import PizzaCard from "../card/PizzaCard";
import Masonry from "@mui/lab/Masonry";
import Lottie from "lottie-react";
import { banner2, Chef, pizzaOrder } from "../../assets/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Recommendation = () => {
  return (
    <Stack bgcolor={""} gap={2}>
      <Stack
        bgcolor={""}
        alignItems={"center"}
        textAlign={"center"}
        position={"relative"}
      >
        <Divider
          sx={{
            width: "50%",
          }}
        >
          <Typography variant="body2" color="grey">
            The Slice Everyone Talks About{" "}
          </Typography>
        </Divider>

        <Typography variant="h4">
          Recommended for <span style={{ color: "#C71E1E" }}>you </span>
        </Typography>

        <Divider
          sx={{
            width: "30%",
          }}
        >
          <Typography variant="body2" sx={{ color: "grey" }}>
            Tried, Tested & Loved by Our Chefs
          </Typography>
        </Divider>
        <Box position="absolute" right={0} top={-10} width={120}>
          <Lottie animationData={Chef} loop />
        </Box>
      </Stack>
      {/* Masonry Grid */}
      <Box px={{ xs: 2, md: 6 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {RECOMMENDED_PIZZAS.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </Masonry>
      </Box>

      <Stack justifyContent={"center"} alignItems={"center"}>
        <Box width={150} bgcolor={""}>
          <Lottie animationData={pizzaOrder} loop />
        </Box>
      </Stack>
      <Box
        sx={{
          maxWidth: "1440px",
          marginX: "auto",
          overflow: "hidden",
          borderRadius: 4,
          bgcolor: "red",
          position: "relative",
        }}
      >
        <img
          src={banner2}
          alt="pizza-banner"
          style={{ display: "block", width: "100%" }}
        />
        <Button
          size="large"
          variant="contained"
           endIcon={<ArrowForwardIcon />}
          sx={{
            position: "absolute",
            bottom: 50,
            right: 100,
            textTransform: "none",
            bgcolor:"#CF2027",
            px:4
          }}
        >
          View full menu
        </Button>
      </Box>
    </Stack>
  );
};

export default Recommendation;
