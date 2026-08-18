```jsx
//JS Object
const user = {
	name: "JOHN",
	age: 20,
	isAdmin: false
};

//Typescriptမှာ ဒီ Object propertyတွေကို tpeသိအောင်လုပ်ပေးနိုင်တယ်
const user: {
name: string;
age: number;
isAdmin: boolean;

} = {
	name: "John",  --|
	age: 20,         | //Typeမှားရင် Errorတက်မယ် Propertyမပါရင်လဲ Errorတက်မယ်။
	isAdmin: false --|
};
```

## Optional Property

age?: number;

*age ပါလဲ ရတယ် မပါလဲရတယ်။ပါခဲ့ရင်လဲ type: numberဖြစ်ရမယ်။*

