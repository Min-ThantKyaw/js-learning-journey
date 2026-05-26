# Digital Clock - Implementation Log

## Date: 2025-07-11

---

## What I Learned

- Using `new Date()` with `getHours()`, `getMinutes()`, `getSeconds()` to get current time
- Using `setInterval()` to update clock every second
- Converting 24h to 12h format using `% 12 || 12` logic
- Using ternary operator to determine AM/PM
- Building time strings with template literals
- Using `padStart(2, '0')` to format single digits (e.g., `9` → `09`)
- Managing state with boolean flag (`is24HourFormat`)
- Object destructuring for cleaner code (`{ hour, period }`)

---

## How I Wrote It Clean

- **Single Responsibility** — Each function does one thing only
  - `convertTo12Hour()` — Only converts format
  - `renderTime()` — Only updates display
  - `initializeClock()` — Only gets time and formats it
  - `toggleFomatButtonText()` — Only changes button text

- **Reusable Helper** — `padZero` arrow function reused everywhere

- **JSDoc Comments** — Every function documented with `@param`, `@returns`

- **Descriptive Naming** — Clear variable names like `is24HourFormat`, `toggleFormatBtn`, `timeString`

- **Separation of Concerns** — Logic separated from DOM manipulation
