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
const addCardImageInputForm = newPostModal.querySelector(".modal__form");
const editProfileCardImageLink = editProfileModal.querySelector(
  "#profile-card-image"
);
const editProfileCaptionLink = editProfileModal.querySelector(
  "profile-caption-link"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEL = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const ProfileCardImageLink = document.querySelector("profile__Card-image");
const ProfileCaptionLink = document.querySelector("profile__Caption-link");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameInput.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContext;
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
  ProfileCardImageLink.textContext = addCardImageLink.value;
  ProfileCaptionLink.textContext = addCaptionLink.value;
}

addCardImageInputForm.addEventListener("sumbit", handleCardInputFormSubmit);
