// DOM selection
const submit = document.querySelector(".rating__btn");
const ratings = document.querySelectorAll(".rating__numbers-container");
const sectionRating = document.querySelector(".rating");
const sectionThanks = document.querySelector(".thanks");

const starSelected = document.querySelector(".thanks__selected-rating");
let selectedRating;

// Rating stars selection

// Function to repeat the code in each possible star rating
function selectRating(ratingElement) {
  ratingElement.classList.add("selected");
  if (selectedRating) {
    selectRating.remove("selected");
  }
}

// Loop for each rating to add the click event listener
ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    selectRating(ratingElement);
  });
});

// Submit button
submit.addEventListener("click", function () {
  if (selectedRating) {
    sectionRating.classList.add("display");
    sectionThanks.classList.remove("display");
    starSelected.textContent = `${selectedRating.textContent}`;
  }
});
