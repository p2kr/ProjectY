import { describe, it, expect } from 'vitest'
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  reset,
  incrementAsync,
} from '@/features/counter/counterSlice'
import type { CounterState } from '@/features/counter/counterSlice'

const initialState: CounterState = { value: 0, status: 'idle' }

describe('counterSlice — reducers', () => {
  it('returns the initial state for unknown actions', () => {
    expect(counterReducer(undefined, { type: '@@INIT' })).toEqual(initialState)
  })

  it('increments the counter by 1', () => {
    expect(counterReducer(initialState, increment()).value).toBe(1)
  })

  it('decrements the counter by 1', () => {
    const state: CounterState = { ...initialState, value: 3 }
    expect(counterReducer(state, decrement()).value).toBe(2)
  })

  it('increments by a specific amount', () => {
    expect(counterReducer(initialState, incrementByAmount(7)).value).toBe(7)
  })

  it('resets the counter to 0', () => {
    const state: CounterState = { ...initialState, value: 42 }
    expect(counterReducer(state, reset()).value).toBe(0)
  })
})

describe('counterSlice — async thunk', () => {
  it('sets status to loading on pending', () => {
    const state = counterReducer(initialState, incrementAsync.pending('', 5))
    expect(state.status).toBe('loading')
  })

  it('adds the payload and sets status to idle on fulfilled', () => {
    const state = counterReducer(
      { value: 10, status: 'loading' },
      incrementAsync.fulfilled(5, '', 5),
    )
    expect(state.value).toBe(15)
    expect(state.status).toBe('idle')
  })

  it('sets status to failed on rejected', () => {
    const state = counterReducer(
      { ...initialState, status: 'loading' },
      incrementAsync.rejected(new Error(), '', 5),
    )
    expect(state.status).toBe('failed')
  })
})
