import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartCounter({details, handleAddProduct, handleRemoveProduct}) {
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleRemoveProduct(details.id)}
      >
        <RemoveIcon />
      </Button>
      <Typography variant="h6" ml={2} mr={1}>
        {details.inCart}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleAddProduct(details.id)}
      >
        <AddIcon />
      </Button>
    </>
  );
}

export default CartCounter;
