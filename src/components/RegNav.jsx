import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function RegNav() {
  return (
    <nav>
      <Link
        component={RouterLink}
        to="/products/all"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        All
      </Link>
      <Link
        component={RouterLink}
        to="/products/womens"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Women's
      </Link>
      <Link
        component={RouterLink}
        to="/products/mens"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Men's
      </Link>
      <Link
        component={RouterLink}
        to="/products/jewelry"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Jewelry
      </Link>
      <Link
        component={RouterLink}
        to="/products/electronics"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Electronics
      </Link>
    </nav>
  );
}

export default RegNav;
