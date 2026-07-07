## Lexical Scope
```jsx
const globalVar = "Global";

function outer() {

    const outerVar = "Outer";

    function inner() {

        console.log(globalVar);
        console.log(outerVar);

    }

    inner();
}

outer();
```

```jsx
//Jsက ဒီ scopeအတိုင်း Variableကိုရှာတယ်။ဒါကို Lexical scoppingလို့ခေါ်တယ်။
Current Scope
↓
Parent Scope
↓
Global Scope
```

## 