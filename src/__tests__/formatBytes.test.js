const { formatBytes } = require('../formatBytes')

describe('formatBytes', () => {

  // R1 + Scenario 1
  test('formatBytes(0) returns "0 B"', () => {
    expect(formatBytes(0)).toBe('0 B')
  })

  // R2 + Scenario 2
  test('formatBytes(1024) returns "1 KB"', () => {
    expect(formatBytes(1024)).toBe('1 KB')
  })

  // R3 + Scenario 3
  test('formatBytes(1536000) returns "1.46 MB"', () => {
    expect(formatBytes(1536000)).toBe('1.46 MB')
  })

  // R3 + Scenario 4 - custom decimals
  test('formatBytes(1048576, 0) returns "1 MB"', () => {
    expect(formatBytes(1048576, 0)).toBe('1 MB')
  })

  // R4 + Scenario 5 - negative decimals guard
  test('formatBytes(1024, -1) treats decimals as 0', () => {
    expect(formatBytes(1024, -1)).toBe('1 KB')
  })

  // R5 + Scenario 6 - negative bytes throws
  test('formatBytes(-1) throws Error', () => {
    expect(() => formatBytes(-1)).toThrow('bytes must be non-negative')
  })

  // R6 - format check: number + space + unit
  test('returns format with single space separator', () => {
    expect(formatBytes(1024)).toMatch(/^\d+(\.\d+)? [A-Z]+$/)
  })

})
