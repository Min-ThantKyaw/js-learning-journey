const elements = {
  counter: document.getElementById('counter'),
  reset: document.getElementById('reset'),
  increment: document.getElementById('increment'),
  decrement: document.getElementById('decrement'),
}

//ပြောင်းလဲနိုင်တဲ့ valueဖြစ်လို့ let ကိုသုံးထားတာ
let count = 0;

function updateCounter() {
  elements.counter.textContent = count;
}

function increment() {
  count++;
  updateCounter();
};

function decrement() {
  count--;
  console.log(count);
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

function keyboardHandler(event) { 
  event.key === '+' && increment();
  event.key === '-' && decrement();
  event.key === '0' && reset();
}
function init() {
  updateCounter();
  elements.increment.addEventListener('click', increment);
  elements.decrement.addEventListener('click', decrement);
  elements.reset.addEventListener('click', reset);
  window.addEventListener('keydown', keyboardHandler);
}

init();
