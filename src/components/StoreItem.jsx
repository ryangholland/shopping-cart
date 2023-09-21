import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function StoreItem({details}) {
  console.log(details)
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
          image={details.image}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {details.title}
          </Typography>
          <Typography>Price: ${details.price}</Typography>
          <hr />
          <Typography>Rating: {details.rating.rate}</Typography>
          <Typography gutterBottom>Items Sold: {details.rating.count}</Typography>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined">Add to Cart</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StoreItem;
