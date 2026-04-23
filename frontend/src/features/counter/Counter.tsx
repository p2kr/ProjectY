import { Button, Typography, Box, Stack, CircularProgress } from '@mui/material'
import { increment, decrement, reset, incrementAsync } from './counterSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'

export default function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const status = useAppSelector((state) => state.counter.status)

  const isLoading = status === 'loading'

  return (
    <Box className="flex flex-col items-center gap-4 p-8 rounded-xl border border-gray-200 bg-white shadow-sm">
      <Typography variant="h5" component="h2" fontWeight={600}>
        Redux Counter
      </Typography>

      <Box className="flex-center w-24 h-24 rounded-full bg-primary-50">
        {isLoading ? (
          <CircularProgress size={32} />
        ) : (
          <Typography variant="h3" className="font-bold text-primary-600">
            {count}
          </Typography>
        )}
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          size="large"
          disabled={isLoading}
          onClick={() => dispatch(decrement())}
        >
          −
        </Button>
        <Button
          variant="contained"
          size="large"
          disabled={isLoading}
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          disabled={isLoading}
          onClick={() => dispatch(incrementAsync(5))}
        >
          Async +5
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="small"
          disabled={isLoading}
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  )
}
