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

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardImageLink = document.querySelector("#card-image-link");
const captionLink = document.querySelector("#profile-caption-link");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModel(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModel(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModel(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) closeModal(editProfileModal) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) closeModal(editProfileModal) {
  evt.preventDefault();
  console.log(cardImageLink.value);
  console.log(captionLink.value);
  closeModal(newPostModal)
}

addCardImageInputForm.addEventListener("submit", handleAddCardSubmit);
