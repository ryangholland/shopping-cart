import { Drawer, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon fontSize="large" />
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: "350px", textAlign: "center", p: 4 }}>
          <Typography variant="h5">Your Cart</Typography>
          <hr />
          <Typography gutterBottom mt={3}>
            There's nothing here!
          </Typography>
          <Box sx={{mt:3, display: "flex", justifyContent: "space-between"}}>
            <Button variant="outlined" color="error" onClick={() => setIsOpen(false)}>Close Cart</Button>
            <Button variant="contained" color="success">Checkout</Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
