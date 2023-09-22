import { Card, CardMedia, CardContent } from "@mui/material";
import CartCounter from "./CartCounter";

function CartItem({ details, handleAddProduct, handleRemoveProduct }) {
  return (
    <Card raised sx={{ my: 3, display: "flex", justifyContent: "center" }}>
      <CardMedia
        component="img"
        sx={{
          maxWidth: "60px",
          height: "auto",
          m: 1,
          objectFit: "scale-down",
        }}
        image={details.image}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: 4,
        }}
      >
        <CartCounter
                details={details}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
      </CardContent>
    </Card>
  );
}

export default CartItem;
