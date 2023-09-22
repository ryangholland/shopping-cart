import { Grid, Typography } from "@mui/material";
import StoreItem from "../StoreItem";
import { useOutletContext } from "react-router-dom";

function AllItems() {
  const products = useOutletContext();

  return (
    <>
      <Typography align="center" gutterBottom variant="h4" my={3}>
        All Items
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => (
          <StoreItem key={product.id} details={product} />
        ))}
      </Grid>
    </>
  );
}

export default AllItems;
