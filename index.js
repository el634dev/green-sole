// Selectors for the dot class
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// ----------------------------
// Client Testimonials
const testimonial1 = document.querySelector('.testimonial1');
const testimonial2 = document.querySelector('.testimonial2');
const testimonial3 = document.querySelector('.testimonial3');

// ----------------------------
// Testimonial Parent Container
const tests = document.querySelector('.tests');

// ----------------------------
// Next Parent Container Interval
let nextDivInt = window.setInterval(function() {
    // Check for and remove second class
    if (tests.classList.contains('second')) {
        tests.classList.remove('second');

        // Add class which shows the third testimonial
        tests.classList.add('third');
    }
}, 4000)

// ----------------------------
let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');

    //add the class which shows the third testimonial
    tests.classList.add('third');
  }

}, 4000)

// ----------------------------
let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');

    //add the class that shows the second testimonial
    tests.classList.add('second');
  }

}, 8000)

// ----------------------------
let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');

    //add the class that has the first testimonial
    tests.classList.add('first');
  }
}, 16000)

// ----------------------------
// Event listener to click on next testimoninal
function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (tests.classList.contains(oldClassOne)) {
    tests.classList.remove(oldClassOne);
  }

  if (tests.classList.contains(oldClassTwo)) {
    tests.classList.remove(oldClassTwo)
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add(newClass);
}

nextNext.addEventListener("click", function() {
  dotClick('second', 'first', 'third');

})

next.addEventListener("click", function() {
  dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {
  dotClick('second', 'third', 'first');

})