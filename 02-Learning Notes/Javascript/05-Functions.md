`Function is a reusable code block that performs a specific task.`

# Function Declaration

```jsx
//Function Declaration
function sayHello() {
	//A variable decalred inside a function is only visible inside the function.
	let message = "world";
    console.log("Hello ${message}");
}

sayHello(); //Function call(execution)
```

`Function declaration မှာ function declareရဲ့အပေါ်မှာ function callလို့ရတယ်။Hoistingလို့ခေါ်တယ်။`
## Parameters
```jsx
function showMessage (from, text) { // parameters: from, text
 alert(from);
 }
 
 //When a value is passed as a function parameter, it's also called ana argument.
 showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
 showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

## Default Value
```jsx
function showMessage (from, text = "Hello") { // text contains 
 alert(from + text);
 }
 
 .
 showMessage('Ann'); //Anns:Hello
 showMessage('Ann', "What's up?");//Ann What's up?
```

## Returning a value
`A function can return a value back into the calling code as the result.`
`A function witn an empty return or without it returns undefined.`
# Function Expression

`Function expression is a function that stores a function in a variable.`

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


# Callback Functions
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action.Becasue functions are "first-class citizens" in javascript, they can be treated like any other variable and passed around freely.
- Callback Function ဆိုတာ Function တစ်ခုဆီကို Argumentအဖြစ် ပို့ပေးလိုက်တဲ့ Function ဖြစ်ပြီး HOF ဆိုတာ Function ကို Parameter အဖြစ်လက်ခံတာ ဒါမှမဟုတ် Function ကို return ပြန်တဲ့ Function ဖြစ်တယ်။

```jsx
makePizza(() => {
	console.log("Pizza ready");
});

makePizza(callback){
	console.log("Making Pizza");
	callback();
}

//Event Listener
button.addEventListener("click", () => {
	console.log("Button Clicked");
});
//()=>{} this is callback
```

## Synchronous Callback

``` jsx
function process(callback){
	console.log("Start");
	callback();
	console.log("End");
}

process(() => {
	console.log("running");
});
```
---
## Asynchronous Callback

```jsx
console.log("1");
setTimeout(() => {
	console.log("2");
}, 1000);
console.log("3");
```
---
## Callback Hell
```jsx
login(user, () => {

    getProfile(() => {

        getPosts(() => {

            getComments(() => {

                console.log("Done");

            });

        });

    });

});
```

---
## Higher Order Functions(HOF)

Functionတစ်ခုက
- Function ကို Parameter အဖြစ်လက်ခံရင်
- Function ကို return ပြန်ရင်
HOFဖြစ်တယ်။
Function လက်ခံတဲ့ function က HOFဖြစ်ပြီး Parameterဖြစ်တဲ့ Function က callback function ဖြစ်တယ်။