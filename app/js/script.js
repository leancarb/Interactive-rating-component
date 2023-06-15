const ratings = document.querySelectorAll(".rating__numbers-container");
const submit = document.querySelector(".rating__btn");

const sectionRating = document.querySelector(".rating");
const sectionThanks = document.querySelector(".thanks");

const starSelected = document.querySelector(".thanks__selected-rating");
let selectedRating;

// Rating stars selection
function selectRating(ratingElement) {
  ratings.forEach((rating) => {
    rating.classList.remove("selected");
  });
  ratingElement.classList.add("selected");
  selectedRating = ratingElement;
}

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    selectRating(rating);
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
