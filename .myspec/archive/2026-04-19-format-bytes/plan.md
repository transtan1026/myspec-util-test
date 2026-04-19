# Plan: format-bytes

## 任務清單

- [ ] 寫失敗測試：formatBytes(0) 回傳 '0 B' (→ R1, Scenario 1)
- [ ] 實作：formatBytes 基本結構 + 零值處理
- [ ] 寫失敗測試：formatBytes(1024) 回傳 '1 KB' (→ R2, Scenario 2)
- [ ] 實作：1024 對數換算邏輯
- [ ] 寫失敗測試：formatBytes(1536000) 回傳 '1.46 MB' (→ R3, Scenario 3)
- [ ] 寫失敗測試：formatBytes(1048576, 0) 回傳 '1 MB' (→ R3, Scenario 4)
- [ ] 實作：decimals 參數支援
- [ ] 寫失敗測試：decimals < 0 視為 0 (→ R4, Scenario 5)
- [ ] 實作：decimals guard
- [ ] 寫失敗測試：bytes < 0 拋出 Error (→ R5, Scenario 6)
- [ ] 實作：bytes 負數 guard
- [ ] Refactor：整理命名、移除重複
- [ ] Verify：重讀 spec，走所有 scenario，查 edge case，看 diff
