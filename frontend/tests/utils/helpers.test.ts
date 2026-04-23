import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { formatDate, truncateText, capitalise, debounce } from '@/utils/helpers'

describe('helpers', () => {
  describe('formatDate', () => {
    it('formats a date string correctly', () => {
      const result = formatDate('2024-01-15')
      expect(result).toContain('2024')
      expect(result).toContain('January')
    })
  })

  describe('truncateText', () => {
    it('returns the original text when under the limit', () => {
      expect(truncateText('Hello', 10)).toBe('Hello')
    })

    it('truncates text and appends an ellipsis', () => {
      const result = truncateText('Hello World', 5)
      expect(result).toBe('Hello…')
    })
  })

  describe('capitalise', () => {
    it('capitalises the first character', () => {
      expect(capitalise('hello')).toBe('Hello')
    })

    it('handles already-capitalised strings', () => {
      expect(capitalise('Hello')).toBe('Hello')
    })
  })

  describe('debounce', () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    it('calls the function only after the delay', () => {
      const fn = vi.fn()
      const debounced = debounce(fn, 200)

      debounced()
      debounced()
      debounced()

      expect(fn).not.toHaveBeenCalled()
      vi.advanceTimersByTime(200)
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })
})
