import { Box, Container, Grid } from "@mui/material";
import StoreItem from "./StoreItem";

function StoreFront() {
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
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </Grid>
      </Container>
    </Box>
  );
}

export default StoreFront;
