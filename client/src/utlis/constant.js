import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Franchise", path: "/franchise" },
  { label: "Allergens", path: "/allergens" },
];

export const DELIIVERY_OPTIONS = [
  { id: "delivery", label: "Delivery", Icon: DeliveryDiningIcon },
  { id: "collect", label: "collect", Icon: ShoppingBagIcon },
];
export const RECOMMENDED_PIZZAS = [
  {
    id: 1,
    name: "Meat Feast Pizza",
    description: "Pepperoni, sausage, ham & bacon",
    price: 14,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
  },
  {
    id: 2,
    name: "Classic Margherita",
    description: "Mozzarella, tomato & basil",
    price: 11,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce & onion",
    price: 13,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    id: 4,
    name: "Veggie Supreme",
    description: "Peppers, olives, onion & corn",
    price: 12,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
  },
  {
    id: 5,
    name: "Spicy Pepperoni",
    description: "Extra pepperoni & chili flakes",
    price: 13.5,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    id: 6,
    name: "Cheese Burst",
    description: "Loaded mozzarella & cheddar",
    price: 12.5,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
  },
];
