# JavaScript Career Growth Plan

**Study time:** 1.5 to 2 hours per day, 6 days a week.
**Total duration:** 12 weeks.

---

## How to Use This Plan

1. Read the day's tasks before you start.
2. Close all distractions.
3. Code along, don't just read.
4. Take short notes in a separate file or notebook.
5. If you miss a day, continue from where you stopped. Don't restart.
6. Push your daily work to GitHub.

---

## Phase 1: JavaScript Core (Week 1–3)

Goal: Understand JavaScript deeply. No frameworks yet.

### Week 1: Language Foundations

#### Day 1: Setup and Variables
- [ ] Review `let`, `const`, `var`
- [ ] Practice: declare variables for a user profile (name, age, isActive, role)
- [ ] Learn strict mode

#### Day 2: Data Types and Type Coercion
- [ ] Review strings, numbers, booleans, null, undefined, symbols, BigInt
- [ ] Learn `typeof`
- [ ] Practice: write a function that checks the type of any input
- [ ] Understand truthy and falsy values

#### Day 3: Operators and Conditionals
- [ ] Arithmetic, comparison, logical operators
- [ ] `if/else`, `else if`, `switch`
- [ ] Ternary operator
- [ ] Practice: build a simple login checker (username and password)

#### Day 4: Loops
- [ ] `for`, `while`, `do...while`
- [ ] `break` and `continue`
- [ ] Loop through arrays and objects
- [ ] Practice: print multiplication table, sum of array numbers

#### Day 5: Functions Deep Dive
- [ ] Function declarations, expressions, arrow functions
- [ ] Parameters, default values, rest parameters
- [ ] Return values
- [ ] Practice: create a function that calculates total price with tax

#### Day 6: Scope and Hoisting
- [ ] Global scope, function scope, block scope
- [ ] Hoisting of variables and functions
- [ ] Practice: predict output of scope-related code snippets

#### Day 7: Weekly Mini Project
- [ ] Build a **Console Banking App**
  - Deposit money
  - Withdraw money
  - Check balance
  - Transaction history
- [ ] Push to GitHub

---

### Week 2: Arrays, Objects, and Modern Syntax

#### Day 8: Arrays Basics
- [ ] Creating arrays
- [ ] Accessing and modifying items
- [ ] `push`, `pop`, `shift`, `unshift`, `splice`, `slice`
- [ ] Practice: manage a to-do list array

#### Day 9: Array Methods Part 1
- [ ] `forEach`, `map`, `filter`, `find`, `findIndex`
- [ ] Practice: transform a list of products into prices
- [ ] Practice: filter active users from a list

#### Day 10: Array Methods Part 2
- [ ] `reduce`, `some`, `every`, `includes`, `sort`
- [ ] Practice: calculate total cart value
- [ ] Practice: check if all users are verified

#### Day 11: Objects Deep Dive
- [ ] Creating and accessing objects
- [ ] Dot vs bracket notation
- [ ] Object methods and `this`
- [ ] Practice: build a user object with methods

#### Day 12: Object Manipulation
- [ ] `Object.keys`, `Object.values`, `Object.entries`
- [ ] Object spreading and copying
- [ ] Practice: convert object to array and back

#### Day 13: Destructuring, Spread, and Rest
- [ ] Array destructuring
- [ ] Object destructuring
- [ ] Spread operator
- [ ] Rest parameters
- [ ] Practice: refactor old code using destructuring

#### Day 14: Weekly Mini Project
- [ ] Build a **Product Inventory Manager**
  - Add product
  - Remove product
  - Search product
  - Calculate total inventory value
- [ ] Use array methods only
- [ ] Push to GitHub

---

### Week 3: Advanced JavaScript Concepts

#### Day 15: Closures
- [ ] Understand lexical scope
- [ ] Learn what closures are
- [ ] Practice: create a counter function using closures
- [ ] Practice: private variables with closures

#### Day 16: The `this` Keyword
- [ ] `this` in global scope
- [ ] `this` in functions and methods
- [ ] `call`, `apply`, `bind`
- [ ] Practice: fix `this` context in event handlers

#### Day 17: Prototypes and Classes
- [ ] Prototype chain basics
- [ ] ES6 classes
- [ ] Constructor, methods, inheritance
- [ ] Practice: create `User`, `Admin`, `Customer` classes

#### Day 18: Error Handling
- [ ] `try/catch/finally`
- [ ] Throwing custom errors
- [ ] Practice: validate user input and throw meaningful errors

#### Day 19: Modules (ES6)
- [ ] `export` and `import`
- [ ] Default vs named exports
- [ ] Practice: split a project into multiple files

#### Day 20: Higher-Order Functions
- [ ] Functions that accept functions
- [ ] Functions that return functions
- [ ] Practice: create your own `map` and `filter` functions

#### Day 21: Weekly Project
- [ ] Build a **Library Management System**
  - Add/remove books
  - Borrow/return books
  - Search books by title or author
  - Track borrowed books
- [ ] Use classes, modules, and error handling
- [ ] Push to GitHub

---

## Phase 2: Asynchronous JavaScript and APIs (Week 4–5)

Goal: Work with real data and understand async behavior.

### Week 4: Asynchronous Programming

#### Day 22: The Event Loop
- [ ] Watch a short video or read about the event loop
- [ ] Understand call stack, task queue, microtasks
- [ ] Practice: predict the output of async code snippets

#### Day 23: Callbacks
- [ ] Understand callback functions
- [ ] Callback hell
- [ ] Practice: simulate async operations with callbacks

#### Day 24: Promises
- [ ] Creating promises
- [ ] `then`, `catch`, `finally`
- [ ] Promise chaining
- [ ] Practice: convert callback code to promises

#### Day 25: Async/Await
- [ ] `async` functions
- [ ] `await` keyword
- [ ] Error handling with `try/catch`
- [ ] Practice: refactor promise code with async/await

#### Day 26: Promise Combinators
- [ ] `Promise.all`
- [ ] `Promise.race`
- [ ] `Promise.allSettled`
- [ ] Practice: fetch multiple resources at once

#### Day 27: Fetch API
- [ ] GET requests
- [ ] POST requests
- [ ] Headers and JSON
- [ ] Practice: fetch data from JSONPlaceholder

#### Day 28: Weekly Project
- [ ] Build a **Blog Reader App**
  - Fetch posts from JSONPlaceholder
  - Display posts
  - Click a post to show comments
  - Show loading and error states
- [ ] Push to GitHub

---

### Week 5: API Integration and Error Handling

#### Day 29: Working with Real APIs
- [ ] Sign up for a free API key if needed (OpenWeatherMap, OMDB)
- [ ] Read API documentation
- [ ] Practice: make requests using fetch

#### Day 30: Handling API Errors
- [ ] Network errors
- [ ] HTTP status codes
- [ ] Retry logic basics
- [ ] Practice: show user-friendly error messages

#### Day 31: Pagination and Search
- [ ] Implement search with query parameters
- [ ] Implement pagination (next/previous)
- [ ] Practice: search movies using OMDB API

#### Day 32: Local Storage
- [ ] `localStorage` and `sessionStorage`
- [ ] Save and retrieve data
- [ ] Practice: save user preferences or cart items

#### Day 33: Debounce and Throttle
- [ ] Understand debounce
- [ ] Understand throttle
- [ ] Practice: implement debounce for a search input

#### Day 34: Async Patterns Review
- [ ] Review all async concepts
- [ ] Solve 3 async-related problems on Codewars or LeetCode

#### Day 35: Weekly Project
- [ ] Build a **Weather Dashboard**
  - Search by city
  - Fetch weather from Open-Meteo or OpenWeatherMap
  - Show current weather and forecast
  - Save recent searches in localStorage
- [ ] Push to GitHub

---

## Phase 3: Modern Development Workflow (Week 6–7)

Goal: Use the tools professional developers use every day.

### Week 6: Tooling Setup

#### Day 36: npm Basics
- [ ] Understand `package.json`
- [ ] Install local and global packages
- [ ] Understand `node_modules`
- [ ] Practice: initialize a project with npm

#### Day 37: Vite Setup
- [ ] Create a project with Vite
- [ ] Understand project structure
- [ ] Run dev server and build command
- [ ] Practice: move an old project to Vite

#### Day 38: ESLint and Prettier
- [ ] Install and configure ESLint
- [ ] Install and configure Prettier
- [ ] Practice: fix lint errors in your code

#### Day 39: Git Workflow for Professionals
- [ ] Branching strategy
- [ ] Meaningful commit messages
- [ ] Pull requests basics
- [ ] Practice: create feature branches for small changes

#### Day 40: Writing Unit Tests
- [ ] Install Jest or Vitest
- [ ] Write basic tests
- [ ] Test functions with inputs and outputs
- [ ] Practice: write tests for your inventory manager

#### Day 41: Testing Async Code
- [ ] Test promises and async functions
- [ ] Mock API calls
- [ ] Practice: write tests for your weather app functions

#### Day 42: Weekly Project
- [ ] Refactor your **Weather Dashboard** with:
  - Vite
  - ESLint + Prettier
  - Jest/Vitest tests
  - Clean module structure
- [ ] Push to GitHub with proper commits

---

### Week 7: Clean Code and Architecture

#### Day 43: Code Organization
- [ ] Separate concerns: UI, logic, API, utils
- [ ] Folder structure
- [ ] Practice: reorganize an old project

#### Day 44: Naming and Readability
- [ ] Meaningful variable names
- [ ] Function naming
- [ ] Avoid magic numbers
- [ ] Practice: refactor poorly named code

#### Day 45: DRY and KISS Principles
- [ ] Don't Repeat Yourself
- [ ] Keep It Simple, Stupid
- [ ] Practice: remove duplication from your code

#### Day 46: Error Boundaries and Validation
- [ ] Input validation
- [ ] Centralized error handling
- [ ] Practice: add validation to a form project

#### Day 47: Documentation
- [ ] Write good README files
- [ ] Add JSDoc comments
- [ ] Practice: document your weather dashboard

#### Day 48: Code Review Practice
- [ ] Review your own old code
- [ ] Find 5 things to improve
- [ ] Refactor and push

#### Day 49: Weekly Project
- [ ] Build a **Task Management Dashboard**
  - Add/edit/delete tasks
  - Filter by status
  - Search tasks
  - Sort by date or priority
  - Save to localStorage
  - Write tests
- [ ] Push to GitHub

---

## Phase 4: TypeScript (Week 8–9)

Goal: Add type safety to your JavaScript skills.

### Week 8: TypeScript Fundamentals

#### Day 50: TypeScript Setup
- [ ] Install TypeScript
- [ ] Configure `tsconfig.json`
- [ ] Compile TS to JS
- [ ] Practice: convert a small JS file to TS

#### Day 51: Basic Types
- [ ] `string`, `number`, `boolean`, `array`, `object`
- [ ] `any`, `unknown`, `never`
- [ ] Type inference
- [ ] Practice: type your variables

#### Day 52: Interfaces and Type Aliases
- [ ] `interface`
- [ ] `type`
- [ ] Optional and readonly properties
- [ ] Practice: define types for a user and product

#### Day 53: Functions and Generics
- [ ] Typing function parameters and returns
- [ ] Generic functions
- [ ] Practice: create generic array filter function

#### Day 54: Union and Intersection Types
- [ ] Union types
- [ ] Intersection types
- [ ] Literal types
- [ ] Practice: model different user roles

#### Day 55: TypeScript with DOM
- [ ] Type assertions
- [ ] Typing event listeners
- [ ] Practice: convert a DOM project to TypeScript

#### Day 56: Weekly Project
- [ ] Convert your **Task Management Dashboard** to TypeScript
- [ ] Fix all type errors
- [ ] Push to GitHub

---

### Week 9: Advanced TypeScript

#### Day 57: Enums and Tuples
- [ ] Numeric and string enums
- [ ] Tuples
- [ ] Practice: model order status with enums

#### Day 58: Type Narrowing
- [ ] `typeof` guards
- [ ] `instanceof` guards
- [ ] Discriminated unions
- [ ] Practice: safely handle different input types

#### Day 59: Utility Types
- [ ] `Partial`, `Required`, `Readonly`
- [ ] `Pick`, `Omit`, `Record`
- [ ] Practice: build flexible object types

#### Day 60: TypeScript Modules
- [ ] Exporting types
- [ ] Organizing `.ts` files
- [ ] Practice: refactor project with typed modules

#### Day 61: Testing TypeScript
- [ ] Configure Jest/Vitest with TypeScript
- [ ] Write tests for typed functions
- [ ] Practice: add tests to your TS project

#### Day 62: TypeScript Best Practices
- [ ] Avoid `any`
- [ ] Use strict mode
- [ ] Practice: review and improve your TS code

#### Day 63: Weekly Project
- [ ] Build a **Small E-Commerce Cart** in TypeScript
  - Product list
  - Add to cart
  - Update quantity
  - Remove item
  - Calculate totals
  - Checkout form with validation
- [ ] Push to GitHub

---

## Phase 5: Frontend Framework — React (Week 10–12)

Goal: Learn React, the most in-demand frontend framework.

### Week 10: React Basics

#### Day 64: React Setup
- [ ] Create app with Vite + React
- [ ] Understand JSX
- [ ] Components and props
- [ ] Practice: build a simple profile card

#### Day 65: State with useState
- [ ] Understanding state
- [ ] Updating state
- [ ] Practice: counter, form inputs

#### Day 66: useEffect
- [ ] Side effects
- [ ] Dependency array
- [ ] Cleanup function
- [ ] Practice: fetch data on mount

#### Day 67: Conditional Rendering and Lists
- [ ] Render based on state
- [ ] Render lists with `map`
- [ ] Practice: display a list of users with loading state

#### Day 68: Event Handling and Forms
- [ ] Handling events in React
- [ ] Controlled components
- [ ] Practice: build a contact form

#### Day 69: Component Composition
- [ ] Props drilling basics
- [ ] Reusable components
- [ ] Practice: build reusable Button, Input, Card components

#### Day 70: Weekly Project
- [ ] Build a **React To-Do App**
  - Add, toggle, delete tasks
  - Filter by active/completed
  - Save to localStorage
- [ ] Push to GitHub

---

### Week 11: Intermediate React

#### Day 71: Lifting State Up
- [ ] Share state between components
- [ ] Practice: build a simple calculator

#### Day 72: React Router
- [ ] Install and setup React Router
- [ ] Routes, links, navigation
- [ ] Practice: multi-page app

#### Day 73: Context API
- [ ] Global state without external libraries
- [ ] Provider and consumer
- [ ] Practice: theme toggle or auth context

#### Day 74: useRef and useMemo
- [ ] `useRef` for DOM access
- [ ] `useMemo` for performance
- [ ] Practice: focus input, memoize expensive calculation

#### Day 75: Custom Hooks
- [ ] Build your own hooks
- [ ] Practice: create `useFetch` and `useLocalStorage`

#### Day 76: Error Handling in React
- [ ] Error boundaries
- [ ] Handling API errors
- [ ] Practice: show error fallbacks

#### Day 77: Weekly Project
- [ ] Build a **React Movie Search App**
  - Search with OMDB API
  - Movie detail page with React Router
  - Loading and error states
  - Favorites list using Context API
- [ ] Push to GitHub

---

### Week 12: React Advanced and Portfolio

#### Day 78: State Management with Redux Toolkit or Zustand
- [ ] Learn basics of Redux Toolkit or Zustand
- [ ] Practice: manage global cart state

#### Day 79: React Query or SWR
- [ ] Server state management
- [ ] Caching and refetching
- [ ] Practice: replace `useFetch` with React Query

#### Day 80: Styling in React
- [ ] CSS Modules
- [ ] Tailwind CSS
- [ ] Practice: style your movie app

#### Day 81: Testing React Components
- [ ] React Testing Library
- [ ] Write tests for components
- [ ] Practice: test your To-Do app

#### Day 82: Performance Basics
- [ ] Memoization
- [ ] Lazy loading with `React.lazy`
- [ ] Practice: optimize your app

#### Day 83: Deployment
- [ ] Deploy React app to Vercel or Netlify
- [ ] Set up custom domain if desired
- [ ] Practice: deploy all your projects

#### Day 84: Final Project
- [ ] Build a **Full-Featured Dashboard App**
  - Authentication simulation (login/logout)
  - Sidebar navigation
  - Data tables with sorting and filtering
  - Charts using a chart library
  - Dark mode toggle
  - Responsive design
  - Tests included
- [ ] Write a detailed README
- [ ] Deploy live
- [ ] Add to portfolio and LinkedIn

---

## Daily Routine Template

Spend your study time like this:

| Time | Activity |
|------|----------|
| 15 min | Review yesterday's notes |
| 45 min | Learn the day's topic |
| 45 min | Practice by writing code |
| 15 min | Push to GitHub and write a short summary |

---

## Weekly Checklist

At the end of every week, ask yourself:

- [ ] Did I finish all 6 days?
- [ ] Did I push code to GitHub?
- [ ] Did I build at least one small project?
- [ ] Can I explain what I learned to someone else?
- [ ] Did I write any tests?

---

## Projects Summary

| Week | Project |
|------|---------|
| 1 | Console Banking App |
| 2 | Product Inventory Manager |
| 3 | Library Management System |
| 4 | Blog Reader App |
| 5 | Weather Dashboard |
| 6 | Refactored Weather Dashboard |
| 7 | Task Management Dashboard |
| 8 | TypeScript Task Dashboard |
| 9 | E-Commerce Cart in TypeScript |
| 10 | React To-Do App |
| 11 | React Movie Search App |
| 12 | Full-Featured Dashboard App |

---

## Recommended Resources

- [JavaScript.info](https://javascript.info)
- [MDN Web Docs](https://developer.mozilla.org)
- [freeCodeCamp](https://freecodecamp.org)
- [Frontend Masters](https://frontendmasters.com)
- [Total TypeScript](https://totaltypescript.com)
- [React Docs](https://react.dev)

---

## Career Tips to Remember

1. Push code to GitHub every day you study.
2. Write meaningful commit messages.
3. Keep your GitHub profile clean.
4. Share your projects on LinkedIn.
5. Build a portfolio website.
6. Apply for jobs even when you don't feel 100% ready.
7. Practice explaining your code out loud.

---

## Final Goal

After 12 weeks, you should have:

- Strong JavaScript fundamentals
- Experience with async programming and APIs
- TypeScript knowledge
- React project experience
- A portfolio with 6+ projects
- Clean Git history
- Confidence to apply for mid-level frontend roles

---

Good luck. Start with Day 1 today.
