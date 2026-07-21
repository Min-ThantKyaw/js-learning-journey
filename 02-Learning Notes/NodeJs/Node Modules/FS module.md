## fs.promises
*ဆိုတာ promise-based provideလုပ်တဲ့ built-in Node.js API, asynchronous file system mehthodsတွေဖြစ်တယ်*

### Why it was?
*promise-based မတိုင်ခင်က callback function ပေါ်မှာပဲမှီခိုခဲ့ကြတယ်။ဒါက callback hellကိုဖြစ်စေနိုင်သလို့ error-handling လုပ်ဖို့လဲမလွယ်သလို complexဖြစ်တယ် codeတွေဖတ်ရတာရှုပ်တယ်*

#### Example
```jsx


```

---
### How it works?
- fs.promiseကို သုံးတဲ့ အခါ fs moduleထဲက function တွေက promise version ဖြစ်သွားတယ်။
- Promise objectကို returnလုပ်ပြီး await နဲ့ .then()ကို အသုံးပြုနိုင်တယ်။
- fs.readFile()->libuv->Thread Pool->OS Read - JS Threadကို ဖိုင်ကိူမဖတ်ဘူး libuvကို ပို့လိုက်တာ
- .await က Promise Resolveဖြစ်တဲ့ထိ function ကို pauseထားတယ်။
- Thread Poolကို data readနေပေမဲ့ Event Loopက တစ်ခြား requestတွေကို(Non-blocking) ဆက်လုပ်နိုင်တယ်။
- Thread Pool(Finished)->Promise resolve(data)->Event Loop->Microtask Queue->await

---

### When?
*JS execution threadရဲ့ အပြင်မှာ completeဖြစ်ဖို့ အချိန်ယူရတဲ့ Asynchronous operation တွေတိုင်းမှာ Promisesသုံး*

---
### Important