import { Box, Container, Grid, Typography } from "@mui/material";
import StoreItem from "./StoreItem";
import {Outlet} from "react-router-dom"

function StoreFront({ products, handleAddProduct, handleRemoveProduct }) {
  
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
        <Outlet context={[products, handleAddProduct, handleRemoveProduct]} />

      </Container>
    </Box>
  );
}

export default StoreFront;
