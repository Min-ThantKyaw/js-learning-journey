# Accordion Component Logic Explanation

Accordion မှာ **HTML က structure**, **Tailwind CSS က design**, **JavaScript က behavior / logic** ပါ။

အဓိက logic က—

> User က question တစ်ခုကို click လုပ်တယ် → JS က အဲဒီ question နဲ့ဆိုင်တဲ့ answer ကိုရှာတယ် → အရင်ဖွင့်ထားတဲ့ answer တွေအကုန်ပိတ်တယ် → click လုပ်ထားတဲ့ answer ကိုပဲဖွင့်တယ်။

---

## 1. HTML နဲ့ JavaScript ဘယ်လိုချိတ်ထားလဲ

HTML ထဲမှာ JavaScript ကရှာလို့ရအောင် custom attribute တွေ ထည့်ထားပါတယ်။

```html
<button data-accordion-btn>
  Question
</button>

<div data-accordion-content class="hidden">
  Answer
</div>
```

ဒီမှာ—

```html
data-accordion-btn
```

က **click လုပ်မယ့် button** ဆိုတာ JS ကိုသိစေပါတယ်။

```html
data-accordion-content
```

က **ဖွင့်/ပိတ်လုပ်မယ့် answer box** ဆိုတာ JS ကိုသိစေပါတယ်။

`data-*` attribute တွေကို JavaScript နဲ့ HTML ချိတ်ဖို့ သုံးတာက clean ဖြစ်ပါတယ်။  
Class name ကို design အတွက်ပဲထားပြီး, data attribute ကို logic အတွက်သုံးတာပိုကောင်းပါတယ်။

---

## 2. JavaScript Code ကို တစ်ကြောင်းချင်းရှင်းပြခြင်း

### Select all accordion buttons

```js
const accordionButtons = document.querySelectorAll("[data-accordion-btn]");
```

ဒီ code က page ထဲမှာရှိတဲ့ `data-accordion-btn` ပါတဲ့ button အားလုံးကို ရှာပါတယ်။

ဥပမာ button 4 ခုရှိရင် `accordionButtons` ထဲမှာ button 4 ခုလုံးဝင်သွားမယ်။

### Concept: `document.querySelectorAll()`

```js
document.querySelectorAll()
```

ဆိုတာ HTML element အများကြီးကို ရွေးချယ်ချင်တဲ့အခါ သုံးပါတယ်။

---

### Loop through each button

```js
accordionButtons.forEach((button) => {
```

button တစ်ခုချင်းစီကို loop ပတ်တာပါ။

button 4 ခုရှိရင်—

```txt
ပထမ button
ဒုတိယ button
တတိယ button
စတုတ္ထ button
```

တစ်ခုချင်းစီကို အလုပ်လုပ်ပေးမယ်။

### Concept: `forEach()`

```js
forEach()
```

ဆိုတာ array-like list ထဲက item တစ်ခုချင်းစီကို အလုပ်လုပ်ချင်တဲ့အခါ သုံးပါတယ်။

---

### Listen for click event

```js
button.addEventListener("click", () => {
```

ဒီ button ကို click လုပ်ရင် အထဲက code တွေ run မယ်လို့ သတ်မှတ်တာပါ။

### Concept: `addEventListener()`

```js
addEventListener()
```

ဆိုတာ user action တွေကို စောင့်ကြည့်တာပါ။

ဥပမာ—

```js
click
mouseover
keydown
submit
```

Accordion မှာတော့ `click` ကိုသုံးပါတယ်။

---

### Get the clicked accordion item

```js
const accordionItem = button.parentElement;
```

ဒီ code က click လုပ်ထားတဲ့ button ရဲ့ parent box ကိုယူတာပါ။

HTML structure က ဒီလိုရှိတယ်—

```html
<div class="accordion-item">
  <button>Question</button>
  <div>Answer</div>
</div>
```

button ရဲ့ parent က အပြင်ဘက် `div` ဖြစ်ပါတယ်။

### Concept: `parentElement`

```js
parentElement
```

ဆိုတာ ကိုယ်ရွေးထားတဲ့ element ရဲ့ အပေါ်က parent element ကိုယူတာပါ။

---

### Get the content of the clicked item

```js
const content = accordionItem.querySelector("[data-accordion-content]");
```

ဒီ code က အဲဒီ accordion item ထဲက answer content ကိုရှာပါတယ်။

သတိထားရမယ့်အချက်က—

```js
document.querySelector()
```

မသုံးဘဲ

```js
accordionItem.querySelector()
```

သုံးထားပါတယ်။

ဘာလို့လဲဆိုတော့ click လုပ်ထားတဲ့ item ထဲက content ကိုပဲလိုချင်လို့ပါ။

ဥပမာ question 3 ကို click လုပ်ရင် answer 3 ကိုပဲ ရှာချင်တာပါ။  
Page တစ်ခုလုံးထဲက ပထမဆုံး answer ကို မလိုချင်ပါဘူး။

### Concept: `element.querySelector()`

```js
element.querySelector()
```

ဆိုတာ သတ်မှတ်ထားတဲ့ element အတွင်းက child element ကိုရှာတာပါ။

---

### Get the icon

```js
const icon = button.querySelector("span:last-child");
```

ဒီ code က button ထဲက နောက်ဆုံး `span` ကိုရှာတာပါ။

Button structure က ဒီလို—

```html
<button>
  <span>Question</span>
  <span>+</span>
</button>
```

နောက်ဆုံး `span` က `+` icon ဖြစ်ပါတယ်။

### Concept: `span:last-child`

```css
span:last-child
```

ဆိုတာ နောက်ဆုံး child ဖြစ်တဲ့ `span` ကိုရွေးတာပါ။

---

### Check if content is already open

```js
const isOpen = !content.classList.contains("hidden");
```

ဒီ code က content ဖွင့်ထားလား ပိတ်ထားလား စစ်တာပါ။

Tailwind မှာ—

```html
class="hidden"
```

ရှိရင် element မမြင်ရပါဘူး။

အဲဒါကြောင့်—

```js
content.classList.contains("hidden")
```

ဆိုတာ `hidden` class ရှိလား စစ်တာပါ။

`hidden` ရှိရင် ပိတ်ထားတယ်။  
`hidden` မရှိရင် ဖွင့်ထားတယ်။

ဒါကြောင့်—

```js
!content.classList.contains("hidden")
```

ဆိုတာ **hidden မရှိဘူး = open ဖြစ်နေတယ်** လို့ဆိုလိုတာပါ။

### Concept: `!`

```js
!
```

က opposite ပြောင်းတာပါ။

```js
true  -> false
false -> true
```

---

## 3. အရင်ဖွင့်ထားတာတွေ အကုန်ပိတ်တဲ့ Logic

```js
accordionButtons.forEach((btn) => {
  const item = btn.parentElement;
  const itemContent = item.querySelector("[data-accordion-content]");
  const itemIcon = btn.querySelector("span:last-child");

  itemContent.classList.add("hidden");
  itemIcon.textContent = "+";
});
```

ဒီအပိုင်းက accordion item အားလုံးကို ပိတ်တာပါ။

Button တစ်ခု click လုပ်တိုင်း အရင်ဆုံး content အကုန်လုံးကို `hidden` ပြန်ထည့်ပါတယ်။

```js
itemContent.classList.add("hidden");
```

ဒါက answer ကိုပိတ်တာပါ။

```js
itemIcon.textContent = "+";
```

ဒါက icon ကို `+` ပြန်ပြောင်းတာပါ။

### Concept: `classList.add()`

```js
classList.add()
```

ဆိုတာ class အသစ်ထည့်တာပါ။

### Concept: `textContent`

```js
textContent
```

ဆိုတာ element ထဲက text ကိုပြောင်းတာပါ။

---

## 4. Click လုပ်ထားတဲ့ Item ကို ပြန်ဖွင့်တဲ့ Logic

```js
if (!isOpen) {
  content.classList.remove("hidden");
  icon.textContent = "−";
}
```

ဒီမှာ logic က နည်းနည်းအရေးကြီးပါတယ်။

အပေါ်မှာ content အကုန်ပိတ်ပြီးသားပါ။  
ဒါပေမယ့် click လုပ်ထားတဲ့ item ကိုတော့ ပြန်ဖွင့်ပေးရမယ်။

ဒါပေမယ့် click လုပ်ထားတဲ့ item က အရင်ကဖွင့်ထားပြီးသားဆိုရင်တော့ ပြန်မဖွင့်တော့ဘူး။ ပိတ်ထားလိုက်မယ်။

အဓိပ္ပါယ်က—

```txt
ပိတ်ထားတဲ့ question ကို click လုပ်ရင် → ဖွင့်မယ်
ဖွင့်ထားတဲ့ question ကို ထပ် click လုပ်ရင် → ပိတ်မယ်
```

```js
content.classList.remove("hidden");
```

ဒါက answer ကိုဖွင့်တာပါ။

```js
icon.textContent = "−";
```

ဒါက `+` icon ကို `−` ပြောင်းတာပါ။

### Concept: `classList.remove()`

```js
classList.remove()
```

ဆိုတာ class ကိုဖယ်တာပါ။

---

## 5. Full Logic Flow

ဥပမာ Item 2 ကို click လုပ်တယ်ဆိုပါစို့။

```txt
1. JS က Item 2 button click ဖြစ်တာသိတယ်
2. Item 2 ရဲ့ parent div ကိုယူတယ်
3. Item 2 ရဲ့ answer content ကိုရှာတယ်
4. Item 2 ဖွင့်ထားပြီးသားလား စစ်တယ်
5. Accordion အားလုံးကို အရင်ပိတ်တယ်
6. Item 2 က ပိတ်ထားတာဖြစ်ရင် ပြန်ဖွင့်တယ်
7. Item 2 icon ကို − ပြောင်းတယ်
```

---

## 6. ဒီ JavaScript ထဲက အသုံးဝင်တဲ့ Concept တွေ

### `querySelectorAll()`

Element အများကြီးကိုရွေးတာ။

```js
document.querySelectorAll(".box");
```

`.box` class ပါတဲ့ element အားလုံးကိုရွေးမယ်။

---

### `querySelector()`

Element တစ်ခုကိုရွေးတာ။

```js
document.querySelector(".box");
```

ပထမဆုံးတွေ့တဲ့ `.box` ကိုပဲရွေးမယ်။

---

### `forEach()`

List ထဲက item တစ်ခုချင်းစီကို အလုပ်လုပ်တာ။

```js
items.forEach((item) => {
  console.log(item);
});
```

---

### `addEventListener()`

User action ကိုစောင့်ကြည့်တာ။

```js
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

### `parentElement`

ကိုယ်ရွေးထားတဲ့ element ရဲ့ parent ကိုယူတာ။

```js
const parent = button.parentElement;
```

---

### `classList.add()`

Class ထည့်တာ။

```js
box.classList.add("hidden");
```

---

### `classList.remove()`

Class ဖယ်တာ။

```js
box.classList.remove("hidden");
```

---

### `classList.contains()`

Class ရှိလားစစ်တာ။

```js
box.classList.contains("hidden");
```

ရှိရင် `true`, မရှိရင် `false` ပြန်ပေးတယ်။

---

### `textContent`

Element ထဲကစာသားကို ပြောင်းတာ။

```js
icon.textContent = "−";
```

---

## 7. Accordion Logic ကို အတိုချုပ်မှတ်ရန်

```txt
click button
↓
clicked item ထဲက content ကိုရှာ
↓
clicked content က ဖွင့်ထားလား စစ်
↓
content အားလုံးပိတ်
↓
clicked content က ပိတ်ထားတာဖြစ်ရင် ပြန်ဖွင့်
```

ဒီ pattern ကို tab, dropdown, modal, sidebar တွေမှာလည်း ပြန်သုံးလို့ရပါတယ်။

အရေးကြီးဆုံးက ဒီ ၃ ခုကိုပိုင်အောင်လုပ်ပါ—

```js
querySelector
addEventListener
classList
```

ဒီ ၃ ခုနားလည်ရင် beginner UI interaction တော်တော်များများ ရေးနိုင်သွားပါပြီ။
