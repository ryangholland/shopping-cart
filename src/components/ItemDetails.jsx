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

function ItemDetails() {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

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
            my: 2
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
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </Typography>
            <Typography gutterBottom>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </Typography>
            <Typography variant="h6">Price: $100.00</Typography>
            <hr />
            <Typography>Rating: 3.8</Typography>
            <Typography gutterBottom>Items Sold: 120</Typography>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" size="large">
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default ItemDetails;
