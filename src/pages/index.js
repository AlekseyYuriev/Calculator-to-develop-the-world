// import css
import '../pages/index.css';

// import constants
import {
  checkboxButton,
  buttons,
  clearButton,
  body,
  headerTitle,
  headerSubtitle,
  lightGrayButtons,
  allButtonsElement,
  display,
} from '../utils/constants';

// import calculate functions
import { clearALL, calculate } from '../utils/calculate';

// add function to change color theme to checkbox
checkboxButton.addEventListener('click', () => {
  body.classList.toggle('page-color');
  headerTitle.classList.toggle('header__title-opacity');
  headerSubtitle.classList.toggle('header__subtitle-opacity');
  lightGrayButtons.forEach((elem) => {
    elem.classList.toggle('btn-blue');
  });
});

// function to remove active class from sign buttons
function removeActiveClass(elements) {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}

// add event to the document to use keyboard
document.onkeydown = (event) => {
  buttons.forEach((elem) => {
    if (elem.value == event.key) {
      elem.click();
    }
  });
};

// add clearAll function to AC button
clearButton.addEventListener('click', () => {
  clearALL();
  display.value = '0';
});

// add event to the buttons

allButtonsElement.addEventListener('click', (evt) => {
  removeActiveClass(buttons);

  // check if the clicked element is a button
  if (!evt.target.classList.contains('calc__btn')) {
    return;
  }

  // check if the clicked element is AC button
  if (evt.target.classList.contains('calc__btn-ac')) {
    return;
  }

  calculate(evt);
});
