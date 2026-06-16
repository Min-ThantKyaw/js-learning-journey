# addEventListener
**An Event Listener is a function that waits for that specific event to happen and runs code in response.**
```jsx
//core syntax
element.addEventListener('event', function, useCapture(optional));
```
- event - a string representing the name of the event
- function - The callback function(listener) that trigger when the event occurs.
- useCapture - : An optional boolean that dictates event propagation.

## Event Object(e/event)

**When an event fires, the browser automatically passes an Event object as the first argument to my listener function.This object contains useful properties and methods.**

- event.targer - Refers to the specific HTML element that triggered the event.
- event.type - Returns the type of event that occured.(click,submit)
- event.preventDefault() - Stops the default browser action.For example, it prevents a form submission from refreshing the ertire page.

### Common Event Types
- Mouse Events : click, dbclick, mouseover, mouseout
- Keyboard Events : keydown, keyup
- Form Events : submit, change, input
- Window Events : DOMContentLoaded, resize

---
# Docment Object Model(DOM)

**DOM represents the structure of a webpage as a tree of objects.A selector is a query of pattern used to target and retrieve specific HTML elements within the DOM.**


[Learn Later]()