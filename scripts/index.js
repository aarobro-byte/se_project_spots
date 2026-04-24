const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = document.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editCardImageLink = editProfileModal.querySelector("#profile-card-image");
const editCaptionLink = editProfileModal.querySelector("#profile-caption-link");
const addCardImageInputForm = editProfileModal.querySelector(".modal__form");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEL = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardImageLink = document.querySelector("#card-image");
const captionLink = document.querySelector("#caption-link");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEL.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  CardImageLinkEl.textContent = editCardImageLink.value;
  CaptionLinkEl.textContent = editCaptionLink.value;
}

addCardImageInputForm.addEventListener("submit", handleAddCardSubmit);
