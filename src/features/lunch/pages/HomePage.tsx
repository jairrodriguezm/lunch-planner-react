import LocalizadorForm from '../components/LocalizadorForm'
import { Container, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" mt={4}>
        Lunch Planner
      </Typography>
      <LocalizadorForm />
    </Container>
  )
}