import { Grid, Typography } from "@mui/material";
import StoreItem from "../StoreItem";
import { useOutletContext } from "react-router-dom";

function Electronics() {
  const products = useOutletContext();

  return (
    <>
      <Typography align="center" gutterBottom variant="h4" my={3}>
        Electronics
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => {
          if (product.category === "electronics")
            return <StoreItem key={product.id} details={product} />;
        })}
      </Grid>
    </>
  );
}

export default Electronics;
