import { Box, Container, Grid, Typography } from "@mui/material";
import StoreItem from "./StoreItem";

function StoreFront({ products }) {
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
        <Typography align="center" gutterBottom variant="h4" my={3}>
          All Items
        </Typography>
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
