import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const PizzaCard = ({ pizza }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={pizza.image}
        alt={pizza.name}
        sx={{
          height: 200,
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography fontWeight={600}>{pizza.name}</Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          {pizza.description}
        </Typography>

        <Typography
          mt={1}
          fontWeight={700}
          sx={{ color: "#C71E1E" }}
        >
          FROM €{pizza.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;
