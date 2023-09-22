import { Grid, Typography } from "@mui/material";
import StoreItem from "../StoreItem";
import { useOutletContext } from "react-router-dom";

function Womens() {
  const [products, handleAddProduct, handleRemoveProduct] = useOutletContext();

  return (
    <>
      <Typography align="center" gutterBottom variant="h4" my={3}>
        Women's
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => {
          if (product.category === "women's clothing")
            return (
              <StoreItem
                key={product.id}
                details={product}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            );
        })}
      </Grid>
    </>
  );
}

export default Womens;
