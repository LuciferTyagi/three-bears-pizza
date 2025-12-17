import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { companyLogo } from "../../assets/assets";
import { NAV_ITEMS } from "../../utlis/constant";
const Header = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        paddingX: 1,
        paddingY: 0.5,
      }}
    >
      <img
        src={companyLogo}
        alt="company-logo"
        width={56}
        style={{
          transition: "transform 0.6s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(360deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotate(0deg)";
        }}
      />

      <Stack direction="row" alignItems={"center"} gap={3}>
        {NAV_ITEMS.map(({ label, path }) => (
          <Typography
            variant="body2"
            key={path}
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              color: "grey",
              "&:hover": {
                color: "#292929ff",
              },
            }}
          >
            {label}
          </Typography>
        ))}
        <Button
          size="small"
          variant="contained"
          sx={{ textTransform: "none", bgcolor: "#C71E1E" }}
        >
          Order Now
        </Button>
        <Typography
          variant="body2"
          sx={{
            color: "grey",
            cursor: "pointer",
            "&:hover": {
              color: "#292929ff",
            },
          }}
        >
          Log In
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
