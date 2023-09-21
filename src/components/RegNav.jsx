import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function RegNav() {
  return (
    <nav>
      <Link
        component={RouterLink}
        to="/store"
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        All
      </Link>
      <Link
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Women's
      </Link>
      <Link
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Men's
      </Link>
      <Link
        variant="button"
        color="inherit"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        underline="hover"
      >
        Jewelry
      </Link>
      <Link
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
