/**
 * formatBytes — 將 bytes 數字轉成人可讀字串
 *
 * @param {number} bytes    - 位元組數，必須 >= 0
 * @param {number} decimals - 小數位數，預設 2；< 0 自動視為 0
 * @returns {string}        - 例：'0 B'、'1.46 MB'、'2 GB'
 * @throws {Error}          - bytes < 0 時拋出 'bytes must be non-negative'
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes < 0) throw new Error('bytes must be non-negative')
  if (bytes === 0) return '0 B'

  const KILO  = 1024
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  const exp   = Math.floor(Math.log(bytes) / Math.log(KILO))
  const value = bytes / Math.pow(KILO, exp)
  const dp    = Math.max(0, decimals)

  return `${parseFloat(value.toFixed(dp))} ${UNITS[exp]}`
}

module.exports = { formatBytes }
