import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RegNav from "./RegNav";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header({ products, handleAddProduct, handleRemoveProduct, handleClearCart }) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between", p: 0.5 }}>
        {!notMobile && (
          <MobileNav />
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
          handleClearCart={handleClearCart}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
