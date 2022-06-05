// Buttons
const buttonBurger = document.querySelector('.button_type_mobile-burger');
const buttonsContact = document.querySelectorAll('.button-contact');
const buttonsClose = document.querySelectorAll('.button_type_close');
const buttonSubs = document.querySelector('.contact__button');

// Input
const contactInput = document.querySelector('.contact__form-input');

// Popup
const popup = document.querySelector('.popup_type_add');
const popupSubs = document.querySelector('.popup_type_subs');
const popupInput = popup.querySelector('.popup__input');

// Navigation
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.header__list')
const navListLink = document.querySelectorAll('.header__link')

// Functions
function openPopup(modalWindow) {
  modalWindow.classList.add('popup_opened');
  modalWindow.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscapeClick)
}

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  modalWindow.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscapeClick)
}

function onOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
};

function onEscapeClick(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
};

function popupSubmitHandler(evt) {
  evt.preventDefault();
  closePopup(popup);
  openPopup(popupSubs)
}

buttonsContact.forEach(button => {
  button.addEventListener('click', () => {
    popupInput.value = "";
    openPopup(popup);
  });
})
buttonsClose.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'))
  });
});
buttonSubs.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup(popupSubs)
})

popup.addEventListener('submit', popupSubmitHandler);

buttonBurger.addEventListener('click', () => {
  nav.classList.toggle('header__nav_active');
  navList.classList.toggle('header__list_active');
  navListLink.forEach(link => {
    link.classList.toggle('header__link_active');
  })
  buttonBurger.classList.toggle('button_type_mobile-burger_active');
})

