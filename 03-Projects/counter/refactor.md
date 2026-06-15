# Counter Script - Refactor Suggestions

## Coding Rules

- Functions should do ONE thing only (Single Responsibility)
- Event listeners should be registered once, not inside functions
- Avoid repeating logic (DRY - Don't Repeat Yourself)
- Keep related logic grouped together
- Use `const` for values that don't change

---

## Issues Found

### 1. Event listeners inside functions (Critical)
`increment()` နဲ့ `decrement()` functions တွေထဲမှာ `addEventListener` ထည့်ထားတယ်။
`init()` ကို call တိုင်း (သို့) function ကို call တိုင်း listener တွေ ထပ်ထပ် register ဖြစ်နေမယ်။

```js
// Bad - listener is inside a function
function increment() {
  window.addEventListener('keydown', (event) => { ... });
  elements.increment.addEventListener('click', () => { ... });
}
```

```js
// Good - register listeners once in init()
function init() {
  elements.increment.addEventListener('click', increment);
  window.addEventListener('keydown', handleKeydown);
}
```

---

### 2. Functions doing more than one thing (Single Responsibility)
`increment()` က count တိုးတာ + event listener register တာ နှစ်ခုလုပ်နေတယ်။
Function တစ်ခုက တစ်ခုပဲ လုပ်သင့်တယ်။

```js
// Bad
function increment() {
  window.addEventListener(...);   // registering event
  elements.increment.addEventListener(...); // registering event
}

// Good
function increment() {
  count++;
  updateCounter();
}
```

---

### 3. Keyboard logic scattered (DRY)
Keyboard handler တွေ `increment()`, `decrement()`, `init()` သုံးနေရာမှာ ကွဲနေတယ်။
တစ်နေရာတည်းမှာ စုထားသင့်တယ်။

```js
// Good - single keyboard handler
function handleKeydown(event) {
  if (event.key === '+') increment();
  if (event.key === '-') decrement();
  if (event.key === 'r') reset();
}
```

---

### 4. Reset logic duplicated
Reset logic (`count = 0; updateCounter()`) က button click နဲ့ keydown နှစ်ခုမှာ ထပ်နေတယ်။
`reset()` function သီးသန့် ထုတ်သင့်တယ်။

```js
// Good
function reset() {
  count = 0;
  updateCounter();
}
```

---

## Suggested Structure

```js
const elements = { ... };
let count = 0;

function updateCounter() { ... }
function increment() { count++; updateCounter(); }
function decrement() { count--; updateCounter(); }
function reset() { count = 0; updateCounter(); }

function handleKeydown(event) {
  if (event.key === '+') increment();
  if (event.key === '-') decrement();
  if (event.key === 'r') reset();
}

function init() {
  updateCounter();
  elements.increment.addEventListener('click', increment);
  elements.decrement.addEventListener('click', decrement);
  elements.reset.addEventListener('click', reset);
  window.addEventListener('keydown', handleKeydown);
}

init();
```
