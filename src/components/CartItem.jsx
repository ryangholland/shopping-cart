import { Card, CardMedia, CardContent, Button } from "@mui/material";

function CartItem() {
  return (
    <Card raised sx={{ my: 3, display: "flex", justifyContent: "center" }}>
      <CardMedia
        component="img"
        sx={{
          maxWidth: "60px",
          height: "auto",
          m: 2,
          objectFit: "scale-down",
        }}
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: 4,
        }}
      >
        <Button>Counter Here</Button>
      </CardContent>
    </Card>
  );
}

export default CartItem;
