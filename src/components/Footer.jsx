import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 0.75 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Created by Ryan Holland © 2023
      </Typography>
    </Box>
  );
}

export default Footer;
