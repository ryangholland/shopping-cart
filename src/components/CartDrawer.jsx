import { Drawer, Button, Box, Typography, Badge } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";

function CartDrawer({
  products,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const totalInCart = products.reduce((a, b) => a + b.inCart, 0);
  const totalPrice = products.reduce((a, b) => a + b.inCart * b.price, 0);

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        <Badge badgeContent={totalInCart} color="success" max={99}>
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{
            width: "350px",
            textAlign: "center",
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ alignSelf: "flex-end", mb: 2 }}
            onClick={() => setIsOpen(false)}
          >
            X
          </Button>
          <Typography variant="h5">Your Cart</Typography>
          <hr />
          {totalInCart === 0 && (
            <Typography gutterBottom mt={2}>
              There's nothing here!
            </Typography>
          )}
          {totalInCart > 0 &&
            products.map((product) => {
              if (product.inCart > 0) {
                return (
                  <CartItem
                    key={product.id}
                    details={product}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                );
              }
            })}
          {totalInCart > 0 && (
            <Typography variant="h6" my={1}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          )}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClearCart}
              disabled={totalInCart === 0}
            >
              Clear Cart
            </Button>

            <Button
              variant="contained"
              color="success"
              disabled={totalInCart === 0}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
