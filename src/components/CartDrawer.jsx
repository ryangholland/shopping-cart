import { Drawer, Button, Box, Typography, Badge } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";

function CartDrawer({ products, handleAddProduct, handleRemoveProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        <Badge
          badgeContent={products.reduce((a, b) => a + b.inCart, 0)}
          color="success"
          max={99}
        >
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: "350px", textAlign: "center", p: 4 }}>
          <Typography variant="h5">Your Cart</Typography>
          <hr />
          <Typography gutterBottom mt={3}>
            There's nothing here!
          </Typography>
          <CartItem />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setIsOpen(false)}
            >
              Close Cart
            </Button>
            <Button variant="contained" color="success">
              Checkout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
