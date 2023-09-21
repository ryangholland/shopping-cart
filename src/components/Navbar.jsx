import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">FakeMart</Typography>
        <nav>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 2.5 }}
            underline="hover"
          >
            All
          </Link>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 2.5 }}
            underline="hover"
          >
            Women's
          </Link>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 2.5 }}
            underline="hover"
          >
            Men's
          </Link>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 2.5 }}
            underline="hover"
          >
            Jewelry
          </Link>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 2.5 }}
            underline="hover"
          >
            Electronics
          </Link>
        </nav>
        <Button>
          <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
