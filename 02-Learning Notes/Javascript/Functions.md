**function is a reusable code block that performs a specific task.**


# Function Declaration

```jsx
//Function Declaration
function sayHello() {
    console.log("Hello");
}

sayHello(); //Function execution
```

Function declaration မှာ function declareရဲ့အပေါ်မှာ function callလို့ရတယ်။Hoistingလို့ခေါ်တယ်။

# Function Expression

Function expression is a function that stores a function in a variable.

```jsx
const sayHello = function () {
    console.log("Hello");
};
//sayHello variable က function(Anonymous Function) ကို Referenceလုပ်ထားတယ်။

sayHello(); //execution
```

Function Expression နဲ့ Function Declaration ကွာခြားချက်က Hoisting။

- Callback Function
- Event Handler
- Dynamic Function Assignment ဒါတွေမှာ အသုံးများတယ်။

# Arrow Functions(⇒)

Arrow Function ရဲ့ အဓိက ရည်ရွယ်ချက်ကFunction ကို တိုတိုရေးဖို့ မဟုတ်ဘဲ `this` binding ပြဿနာကို ဖြေရှင်းဖို့ ဖြစ်ပါတယ်။

```jsx
const add = (a, b) => {
    return a + b;
};
//add-variable name
//(a,b)-parameters
//=> send parameters to function body
```

## Shortcut

```jsx
//can be remove parentheses
const greet = name => {
    return "Hello " + name;
};

//No Parameter - Parentheses () ဖြုတ်လို့မရဘူး
const greet = () => {
    console.log("Hello");
};

//One Line

const add = (a, b) => a + b;
```