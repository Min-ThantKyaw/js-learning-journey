# Scope = Visibility
*Scopeဆိုတာ Variables တွေရဲ့ visibilityကို ဆုံးဖြတ်ပေးတယ်။*

## Scope 3 မျိုးရှိတယ်
- Global Scope
- Function Scope
- Block Scope

### Global Scope
- Block or Function ရဲ့ outsideမှာရှိတဲ့ Variablesတွေက Global Scopeသဘာဝရှိတယ်။
- Declareမလုပ်ထားတဲ့ variable တစ်ခုထဲကို Value Assignလုပ်လိုက်ရင် Global Variableဖြစ်သွားတယ်။

### Function Scope
*Function တစ်ခုအတွင်းမှာ declareထားတဲ့ Variables(Local Variables)တွေက Function Scopeသဘာဝရှိတယ်*


### Block Scope
- ES6မှာ `let` and  `const` introduced
- ဒီနှစ်ကောင်က Block Scope Provideလုပ်တယ်။
- Code blockတစ်ခုတည်း let and const ကို သုံးပြီး declareထားတဲ့ Variablesတွေက Block scopeသဘာဝရှိတယ်။ဒီ Code blockထဲမှာဘဲ Accessလုပ်လို့ရတယ်။

### Strict Mode

`In "Strict Mode", undeclared variables are not automatically global.`
