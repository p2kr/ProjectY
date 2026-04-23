import { Container, Box, Typography, Chip, Stack } from '@mui/material'
import Counter from '@/features/counter/Counter'

const STACK_BADGES = [
  'Vite 6',
  'React 18',
  'TypeScript',
  'Redux Toolkit',
  'MUI v6',
  'Tailwind v3',
  'Axios',
  'Vitest',
]

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box className="min-h-screen flex flex-col items-center justify-center py-12 gap-8">
        <Box className="text-center">
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            ProjectY
          </Typography>
          <Typography variant="body1" className="text-gray-500 mb-6">
            A production-ready template with industry-standard tooling.
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" gap={1}>
            {STACK_BADGES.map((badge) => (
              <Chip key={badge} label={badge} size="small" variant="outlined" />
            ))}
          </Stack>
        </Box>

        <Counter />
      </Box>
    </Container>
  )
}
