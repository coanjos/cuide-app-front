import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export function ChamadaHome() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/agendamentos');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bem-vindo ao Cuide
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Agenda muito corrida para marcar procedimentos de estética? Sem
                problemas! Com o Cuide, você pode procurar encaixes de emergência
                na agenda de salões.              
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={handleRedirect} variant="contained">Agendamentos</Button>
              <Button variant="outlined">Sobre</Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}