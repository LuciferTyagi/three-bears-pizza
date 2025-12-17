import { Stack, Typography } from "@mui/material";
import React from "react";

const TabSelector = ({ deliveryType, setDeliveryType, option }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "999px",
  
        width: "fit-content",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        position:'absolute',
        top:-25
      }}
    >
      {option.map(({ id, label, Icon }) => {
        const isActive = deliveryType === id;

        return (
          <Stack
            key={id}
            direction="row"
            alignItems="center"
            gap={1}
            onClick={() => setDeliveryType(id)}
            sx={{
              cursor: "pointer",
              px: 2.5,
              py: 1,
              borderRadius: "999px",
              backgroundColor: isActive ? "#C71E1E" : "#FCF9F6",
              color: isActive ? "#FCF9F6" : "#555",
              transition: "all 0.25s ease",
              "& svg": {
                color: isActive ? "#FCF9F6" : "#555",
              },
            }}
          >
            <Icon fontSize="small" />
            <Typography
              fontSize={14}
              fontWeight={600}
            >
              {label}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default TabSelector;
