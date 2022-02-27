// Create A Header Slider
const allLi = document.querySelectorAll('#my-list li');
const liLength = allLi.length;
const allBulllets = document.querySelectorAll('#slider-bullets li');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let start = 1;

function removeActiveClasses(arrayOfElements) {
  arrayOfElements.forEach((element) => {
    element.classList.remove('active');
  });
}

function addActiveClasses(arrayOfElements) {
  arrayOfElements[start - 1].classList.add('active');
}

function sliderHandler() {
  removeActiveClasses(allLi);
  removeActiveClasses(allBulllets);
  addActiveClasses(allLi);
  addActiveClasses(allBulllets);
}

function nextBtnHandler() {
  if (start === liLength) {
    start = 0;
  }
  start++;
  sliderHandler();
}

function prevBtnHandler() {
  if (start === 1) {
    start = liLength + 1;
  }
  start--;
  sliderHandler();
}

nextBtn.addEventListener('click', nextBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);

allBulllets.forEach((bullet) => {
  bullet.addEventListener('click', (e) => {
    allBulllets.forEach((bullet) => {
      bullet.classList.remove('active'), e.target.classList.add('active');
    });
    allLi.forEach((li) => {
      li.classList.remove('active');
      document.querySelector(e.target.dataset.change).classList.add('active');
    });
  });
});

// Create filttred Gallary
const myList = document.querySelectorAll('.works ul li');
const myContent = document.querySelectorAll('.works .works-pics-details');
myList.forEach((li) => {
  li.addEventListener('click', (e) => {
    myList.forEach((list) => {
      list.classList.remove('active');
      e.target.classList.add('active');
    });
    myContent.forEach((div) => {
      div.style.display = 'none';
    });
    document.querySelectorAll(e.target.dataset.show).forEach((element) => {
      element.style.display = 'block';
    });
  });
});

// Create A Testimonials Slider
const allTestimonilasLi = document.querySelectorAll(
  '.testimonilas-slider ul li',
);
const testimonilasBullets = document.querySelectorAll(
  '.testimonials-bullets ul li',
);
const testNextBtn = document.getElementById('next-1');
const testPrevBtn = document.getElementById('prev-1');

function testSliderHandler() {
  removeActiveClasses(allTestimonilasLi);
  removeActiveClasses(testimonilasBullets);
  addActiveClasses(allTestimonilasLi);
  addActiveClasses(testimonilasBullets);
}

function testNextBtnHandler() {
  if (start === liLength) {
    start = 0;
  }
  start++;
  testSliderHandler();
}

function testprevBtnHandler() {
  if (start === 1) {
    start = liLength + 1;
  }
  start--;
  testSliderHandler();
}

testNextBtn.addEventListener('click', testNextBtnHandler);
testPrevBtn.addEventListener('click', testprevBtnHandler);

testimonilasBullets.forEach((bullet) => {
  bullet.addEventListener('click', (e) => {
    testimonilasBullets.forEach((bullet) => {
      bullet.classList.remove('active');
      e.target.classList.add('active');
    });
    allTestimonilasLi.forEach((li) => {
      li.classList.remove("active");
      document.querySelector(e.target.dataset.slide).classList.add("active")
    })
  });
});

// Create Statistics
const statDiv = document.querySelector('.stat');
const numsContainer = document.querySelectorAll('.stat p');
let started = true;
window.onscroll = function () {
  if (window.scrollY >= statDiv.offsetTop) {
    if (started) {
      numsContainer.forEach((num) => {
        let goal = num.dataset.progress;
        let counter = setInterval(() => {
          num.textContent++;
          if (num.textContent === goal) {
            clearInterval(counter);
          }
        }, 15000 / goal);
      });
    }
    started = false;
  }
};
