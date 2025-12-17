import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import { banner, woodenSurface } from "../../assets/assets";

import { useState } from "react";
import TabSelector from "../ui/TabSelector";
import { DELIIVERY_OPTIONS } from "../../utlis/constant";
import CustomTextField from "../ui/CustomTextField";
import BearCarousel from "../ui/BearCarousel";
const HeroSection = () => {
  const [deliveryType, setDeliveryType] = useState("delivery");
  return (
    <Stack gap={1}>
      {/* Banner child 1  */}
      <Box
        sx={{
          maxWidth: "1440px",
          marginX: "auto",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <img
          src={banner}
          alt="pizza-banner"
          style={{ display: "block", width: "100%" }}
        />
      </Box>
      {/* Location and Bear carousel child 2 */}
      <Stack
        direction={"row"}
        sx={{
          // paddingTop: 5,
          paddingX: 1,
          backgroundImage: `url(${woodenSurface})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          borderRadius: 4,
          justifyContent: "space-between",
        }}
      >

        <Box
          sx={{
            width: { xs: "100%", md: "300px" },
            // height: { xs: "220px", md: "360px" },
            overflow: "hidden", 
            display: "flex",
            alignItems: "center", 
            justifyContent: "center",
            flexShrink: 0,
        
          }}
        >
          <BearCarousel />
        </Box>
                <Box
          sx={{
            paddingTop: 5,
            width: "600px",
            bgcolor: "",
          }}
        >
          <Box
            sx={{
              padding: 3,
              borderRadius: 4,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              position: "relative",
              bgcolor: "#F7F3EE",
            }}
          >
            <CustomTextField
              placeholder="Enter your Eircode or address"
              endAdornment={<NearMeIcon sx={{ color: "#C71E1E" }} />}
            />
            <TabSelector
              deliveryType={deliveryType}
              setDeliveryType={setDeliveryType}
              option={DELIIVERY_OPTIONS}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
