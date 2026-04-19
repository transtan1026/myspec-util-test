---
slug: format-bytes
title: formatBytes utility
status: archived
author: transtan1026
created: 2026-04-19
issue: '#1'
pr: '#2'
---

# Proposal: formatBytes utility

## Problem
程式碼中常需要把 bytes 數字轉成人可讀的字串（KB、MB、GB），目前各處格式不統一。

## Proposal
實作 `formatBytes(bytes, decimals)` 函式，輸入 bytes 數字，輸出帶單位的格式化字串。

## Approach
純 JS 函式，不依賴 library。用對數計算決定單位，支援 B/KB/MB/GB/TB/PB。

## Non-goals
- 不支援 binary（KiB, MiB）換算
- 不支援反向轉換（string → bytes）
- 不做 i18n（固定英文單位）

## Risks
- decimals 為負數或非整數需要 guard
- bytes=0 要特別處理（避免 log(0)）

## Success criteria
- 常見 byte 值輸出正確單位與小數
- Edge case（0、負數、極大值）有明確行為
