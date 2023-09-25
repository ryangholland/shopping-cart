import { Drawer, Button, Box } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        <MenuIcon fontSize="large" />
      </Button>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{
            width: "200px",

            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ alignSelf: "flex-end", mb: 2 }}
            onClick={() => setIsOpen(false)}
          >
            X
          </Button>
          <nav>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                component={RouterLink}
                to="/products/all"
                variant="button"
                color="inherit"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
                underline="hover"
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
              >
                Electronics
              </Link>
            </Box>
          </nav>
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav;
