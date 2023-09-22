import {
  Box,
  Container,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from "react-router-dom";
import CartCounter from "./CartCounter";

function ItemDetails({ products, handleAddProduct, handleRemoveProduct }) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const params = useParams();

  const details = products.filter((product) => {
    return product.id === +params.id
  })[0];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Card
          raised
          sx={{
            display: "flex",
            flexWrap: notMobile ? "nowrap" : "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            p: 2,
            my: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "300px",
              height: "auto",
              m: 1,
              objectFit: "scale-down",
            }}
            image={details.image}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {details.title}
            </Typography>
            <Typography gutterBottom>
              {details.description}
            </Typography>
            <Typography variant="h6">Price: ${details.price}</Typography>
            <hr />
            <Typography>Rating: {details.rating.rate}</Typography>
            <Typography gutterBottom>Items Sold: {details.rating.count}</Typography>
            <CardActions sx={{display: "flex"}}>
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
      </Container>
    </Box>
  );
}

export default ItemDetails;
