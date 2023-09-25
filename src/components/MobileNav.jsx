import { Drawer, Button, Box } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
            width: "250px",
            textAlign: "center",
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
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav;
