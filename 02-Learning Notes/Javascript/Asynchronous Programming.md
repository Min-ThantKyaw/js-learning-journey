
# Synchronous Programming

***Line by line execution***
```jsx
console.log(1);
console.log(2);
console.log(3);
```

# Asynchronous Programming

- Asynchronous Javascript allows execution to continue without blocking the main thread during time-consuming operations.Because Javascript is a single thread language, it can only execute one task at a time.Asynchronous patterns solve this constraint by offloading heavy tasks like fetch API network requests, file handling, and timers.

- Call Stack
- Web APIs
- Callback Queue
- Event Loop
JavaScript က Run တဲ့အချိန်မှာ အလုပ်လုပ်ရမယ့် မူလ Function တွေကို Call Stack ခေါ် စာရင်းတစ်ခု ထဲထည့်ထားပြီး၊ ဘေးဖယ်ထားလို့ရတဲ့ Callback Function တွေကို Task Queue ခေါ် သီးခြား စာရင်းထဲ မှာ ထည့်ထားလိုက်မှာပါ။ Event Loop က Call Stack ကို စောင့်ကြည့်ပြီး Call Stack ထဲမှာ လုပ်စရာ အလုပ်ကုန်ပြီဆိုရင်Task Queue ထဲက Callback တွေကို Call Stack ထဲရွှေ့ပြီး ဆက်အလုပ်လုပ်စေပါ တယ်။


