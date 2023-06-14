console.log("HELLO");

const rating1 = document.querySelector(".one-star");
const rating2 = document.querySelector(".two-star");
const rating3 = document.querySelector(".three-star");
const rating4 = document.querySelector(".four-star");
const rating5 = document.querySelector(".five-star");
const submit = document.querySelector(".rating__btn");

const sectionRating = document.querySelector(".rating");
const sectionThanks = document.querySelector(".thanks");

const starSelected = document.querySelector(".thanks__selected-rating");
let selectedRating;

// Submit button
submit.addEventListener("click", function () {
  if (selectedRating) {
    sectionRating.classList.add("display");
    sectionThanks.classList.remove("display");
    starSelected.textContent = `${selectedRating.textContent}`;
  }
});

// Rating stars selection
rating1.addEventListener("click", function () {
  rating1.style.backgroundColor = "#7c8898";
  rating1.style.color = "var(--white)";
  if (selectedRating) {
    selectedRating.style.backgroundColor = "";
  }
  selectedRating = rating1;
});

rating2.addEventListener("click", function () {
  rating2.style.backgroundColor = "#7c8898";
  rating2.style.color = "var(--white)";
  if (selectedRating) {
    selectedRating.style.backgroundColor = "";
  }
  selectedRating = rating2;
});

rating3.addEventListener("click", function () {
  rating3.style.backgroundColor = "#7c8898";
  rating3.style.color = "var(--white)";
  if (selectedRating) {
    selectedRating.style.backgroundColor = "";
  }
  selectedRating = rating3;
});

rating4.addEventListener("click", function () {
  rating4.style.backgroundColor = "#7c8898";
  rating4.style.color = "var(--white)";
  if (selectedRating) {
    selectedRating.style.backgroundColor = "";
  }
  selectedRating = rating4;
});

rating5.addEventListener("click", function () {
  rating5.style.backgroundColor = "#7c8898";
  rating5.style.color = "var(--white)";
  if (selectedRating) {
    selectedRating.style.backgroundColor = "";
  }
  selectedRating = rating5;
});
