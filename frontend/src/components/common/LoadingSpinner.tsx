import { Box, CircularProgress } from '@mui/material'

interface LoadingSpinnerProps {
  /** Size of the spinner in px. Default: 40 */
  size?: number
  /** When true, centres the spinner and overlays the full viewport */
  fullScreen?: boolean
}

/**
 * Reusable loading spinner backed by MUI's CircularProgress.
 */
export default function LoadingSpinner({ size = 40, fullScreen = false }: LoadingSpinnerProps) {
  if (fullScreen) {
    return (
      <Box className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <CircularProgress size={size} />
      </Box>
    )
  }

  return (
    <Box className="flex items-center justify-center p-4">
      <CircularProgress size={size} />
    </Box>
  )
}
