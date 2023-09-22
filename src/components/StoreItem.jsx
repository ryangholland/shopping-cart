import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CartCounter from "./CartCounter";

function StoreItem({ details, handleAddProduct, handleRemoveProduct }) {
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
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Link
              to={`/products/${details.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {details.title}
            </Link>
          </Typography>
          <Typography>Price: ${details.price}</Typography>
          <hr />
          <Typography>Rating: {details.rating.rate}</Typography>
          <Typography gutterBottom>
            Items Sold: {details.rating.count}
          </Typography>
          <CardActions>
            {details.inCart === 0 && (
              <Button
                variant="outlined"
                onClick={() => handleAddProduct(details.id)}
              >
                Add to Cart
              </Button>
            )}
            {details.inCart > 0 && (
              <CartCounter
                details={details}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StoreItem;
