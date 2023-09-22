import { Box, Container, Grid, Typography } from "@mui/material";
import StoreItem from "./StoreItem";
import {Outlet} from "react-router-dom"

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
        <Outlet context={products} />

      </Container>
    </Box>
  );
}

export default StoreFront;
