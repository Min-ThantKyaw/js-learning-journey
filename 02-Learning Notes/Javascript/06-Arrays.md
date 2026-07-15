# Arrays
`In javascript, Array is not a primitive Data Type.It is a Object.`

## Creating array
- using array constructor
```jsx
// predefine length
//not same new Array('5')
new Array(5)


//insert elements directly
new Array(1,2,3)

//empty array []
new Array();
```

- Using Array Literal []
	```jsx
	const fruits = ["apple", "mango"];
	```
- Using Array.of()
	```jsx
	//constructorနဲ့မတူဘူး ထည့်သမျှ parameterတိုင်းကို elementအဖြစ်ပြောင်းတယ်။
	const items = Array.of(5) // [5]
	```

## Array methods

- **`push()`:** Array ၏ **အနောက်ဆုံး**သို့ Data အသစ် ထည့်သည်။
- **`pop()`:** Array ၏ **အနောက်ဆုံး**မှ Data တစ်ခုကို ဖယ်ထုတ်သည်။
- **`unshift()`:** Array ၏ **အရှေ့ဆုံး**သို့ Data အသစ် ထည့်သည်။
- **`shift()`:** Array ၏ **အရှေ့ဆုံး**မှ Data တစ်ခုကို ဖယ်ထုတ်သည်။

