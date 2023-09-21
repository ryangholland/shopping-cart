import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import RegNav from "./RegNav";

function Header() {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", p:0.5 }}>
        {!notMobile && (<Button color="inherit" ><MenuIcon fontSize="large" /></Button>)}
        <Typography variant="h5">FakeMart</Typography>
        {notMobile && <RegNav />}
        <Button color="inherit" >
          <ShoppingCartIcon fontSize="large"  />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
