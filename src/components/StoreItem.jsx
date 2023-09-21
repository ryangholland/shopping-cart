import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function StoreItem() {
  return (
    <Grid item xs={12} sm={12} md={6} xl={4}>
      <Card raised sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            maxWidth: "150px",
            height: "auto",
            m: 1,
            objectFit: "scale-down",
          }}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography>Price: $100.00</Typography>
          <hr />
          <Typography>Rating: 3.8</Typography>
          <Typography gutterBottom>Items Sold: 120</Typography>
          <CardActions >
            <Button variant="outlined">Add to Cart</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StoreItem;
