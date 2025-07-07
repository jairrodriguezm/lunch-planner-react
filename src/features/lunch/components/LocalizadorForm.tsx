import { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'

export default function LocalizadorForm() {
  const [localizador, setLocalizador] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Localizador:', localizador)
    // Aquí puedes despachar una acción de Redux si lo deseas
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, px: 2 }}
    >
      <Typography variant="h6" align="center">
        Ingresa tu localizador
      </Typography>
      <TextField
        label="Localizador"
        variant="outlined"
        fullWidth
        value={localizador}
        onChange={(e) => setLocalizador(e.target.value)}
        inputProps={{ maxLength: 6 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Continuar
      </Button>
    </Box>
  )
}