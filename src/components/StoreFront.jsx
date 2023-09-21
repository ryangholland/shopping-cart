import { Box, Container, Grid } from "@mui/material";
import StoreItem from "./StoreItem";
import { useState, useEffect } from "react";

function StoreFront() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={6}>
          {products.map((product) => (
            <StoreItem key={product.id} details={product} />
          ))}
          
        </Grid>
      </Container>
    </Box>
  );
}

export default StoreFront;
