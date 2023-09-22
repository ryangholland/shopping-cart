import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RegNav from "./RegNav";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";

function Header({ products, handleAddProduct, handleRemoveProduct }) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between", p: 0.5 }}>
        {!notMobile && (
          <Button color="inherit">
            <MenuIcon fontSize="large" />
          </Button>
        )}
        <Typography variant="h5">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            FakeMart
          </Link>
        </Typography>
        {notMobile && <RegNav />}
        <CartDrawer
          products={products}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
