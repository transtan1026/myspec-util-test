---
slug: format-bytes
title: formatBytes utility
status: draft
proposal: ./proposal.md
created: 2026-04-19
---

# Spec: formatBytes utility

## Requirements

- R1: `formatBytes(0)` 回傳 `'0 B'`
- R2: `formatBytes(bytes)` 以 1024 為底計算單位（KB/MB/GB/TB/PB）
- R3: `formatBytes(bytes, decimals)` 小數位數由 decimals 控制，預設 2
- R4: decimals < 0 時視為 0（無小數）
- R5: bytes < 0 時拋出 `Error('bytes must be non-negative')`
- R6: 回傳格式為 `'<數字> <單位>'`，數字與單位之間一個空格

## Acceptance Scenarios

### Scenario 1 — 零值
- Given bytes = 0
- When 呼叫 formatBytes(0)
- Then 回傳 '0 B'

### Scenario 2 — bytes 範圍
- Given bytes = 1024
- When 呼叫 formatBytes(1024)
- Then 回傳 '1 KB'

### Scenario 3 — MB 範圍含小數
- Given bytes = 1536000
- When 呼叫 formatBytes(1536000)
- Then 回傳 '1.46 MB'

### Scenario 4 — 自訂小數位數
- Given bytes = 1024 * 1024
- When 呼叫 formatBytes(1048576, 0)
- Then 回傳 '1 MB'

### Scenario 5 — decimals 負數 guard
- Given decimals = -1
- When 呼叫 formatBytes(1024, -1)
- Then 回傳 '1 KB'（decimals 視為 0）

### Scenario 6 — bytes 負數錯誤
- Given bytes = -1
- When 呼叫 formatBytes(-1)
- Then 拋出 Error('bytes must be non-negative')
