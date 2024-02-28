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

// add event to the document to use keyboard
document.onkeydown = (event) => {
  buttons.forEach((elem) => {
    if (elem.value == event.key) {
      elem.click();
    }
  });
};

// add clearAll function to AC button
clearButton.addEventListener('click', clearALL);

// add event to the buttons
document
  .querySelector('.calc__buttons')
  .addEventListener('click', (evt) => calculate(evt));
