import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm">
      <Box className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        <Typography variant="h1" fontWeight={700} className="text-gray-200">
          404
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          Page not found
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    </Container>
  )
}
