### Variable naming
- The name must contain only letters, digits or the symbols $ and __. 
- The first character must not be a digit.
- Reserved words cannot be used as variable names.
### Declaring twice triggers an error
*Variable တစ်ခုက တစ်ခါဘဲ declareလုပ်သင့်*
```jsx
let messsage = "Hello";
let message = "World"; // SyntaxError: 'message' has already been declared
```

### Constants
*Variables declared using `const` are called `constants`.They cannot be reassigned. An attempt to do so would cause an error.*
```jsx
const myBirthday = '10.10.2000';
myBirthday = '1.1.2000'; //errorm can't reassign the constant!
```
