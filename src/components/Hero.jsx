import { Container, Typography, Button, Paper, Box } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundImage: `url(./public/herobg.webp)`,
        backgroundSize: "cover",
      }}
    >
      <Paper sx={{ px: 8, py: 8 }}>
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
          align="center"
        >
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            Welcome to FakeMart
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            The made-up source for all your fictional needs.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Shop All Items
          </Button>
        </Container>
      </Paper>
    </Box>
  );
}

export default Hero;
