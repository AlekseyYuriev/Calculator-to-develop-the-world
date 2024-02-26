// first number
let a = '';
// second number
let b = '';
// operation
let operation = '';
// result
let result = false;
// array with possible digits
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// array with possible signs
const signs = ['/', '*', '-', '+'];
// get input with result
const display = document.querySelector('.calc__result');
// get all buttons
const buttons = document.querySelectorAll('.calc__btn');

// get checkbox
const checkboxButton = document.getElementById('checkbox');

// add function to change color theme to checkbox
console.log(checkboxButton);
checkboxButton.addEventListener('click', () => {
  document.querySelector('.page').classList.toggle('page-color');
  document.querySelectorAll('.calc__btn-light-grey').forEach((elem) => {
    elem.classList.toggle('btn-blue');
  });
});

// function to remove active class from sign buttons
function removeActiveClass(elements) {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}

// AC (clear all function)
function clearALL() {
  a = '';
  b = '';
  operation = '';
  result = false;
  display.value = '0';
}

// get AC button
const clearButton = document.querySelector('.calc__btn-ac');

// add clearAll function to AC button
clearButton.addEventListener('click', clearALL);

// add event to the buttons
document.querySelector('.calc__buttons').addEventListener('click', (evt) => {
  removeActiveClass(buttons);
  // check if the clicked element is a button
  if (!evt.target.classList.contains('calc__btn')) {
    return;
  }
  // check if the clicked element is AC button
  if (evt.target.classList.contains('calc__btn-ac')) {
    return;
  }

  if (a === '' && b === '') {
    display.value = '';
  }

  // get the value of pressed button
  const key = evt.target.value;

  //check if the pressed button is a digit
  if (digits.includes(key)) {
    if (key === '0' && a !== '' && b !== '' && operation !== '' && result) {
      a = key;
      b = '';
      operation = '';
      result = false;
      display.value = a;
      return;
    }
    if (key === '0' && a === '0' && b === '') {
      display.value = a;
      return;
    } else if (key === '0' && a !== '' && b === '0') {
      display.value = b;
      return;
    } else if (key === '0' && b === '' && operation !== '') {
      if (a !== '' && String(a).length >= 1) {
        b += key;
        display.value = b;
        return;
      }
      console.log(a, b, operation, result);
      a = '0';
      display.value = a;
      return;
    } else if (key === '0' && a !== '0' && b !== '0' && operation !== '0' && result) {
      console.log(a, b, operation, result);
      a = key;
      display.value = a;
      result = false;
      return;
    }
    if (key === '.' && a === '0' && b === '') {
      a = '0' + '.';
      display.value = a;
      return;
    } else if (key === '.' && a !== '' && b === '' && operation !== '') {
      if (String(a).length >= 1) {
        console.log(a);
        b = '0' + '.';
        display.value = b;
        return;
      }
      display.value = a;
      return;
    } else if (key === '.' && a !== '' && String(b).includes('.') && !result) {
      console.log(a, b, operation, result);
      display.value = b;
      return;
    } else if (key === '.' && a === '' && b === '' && operation !== '') {
      console.log(a, b, operation, result);
      a = '0' + '.';
      display.value = a;
      return;
    }
    if (operation === '%') {
      if (key === '.') {
        a = '0' + '.';
        b = '';
        operation = '';
        result = false;
        display.value = a;
        return;
      }
      a = key;
      b = '';
      operation = '';
      display.value = a;
      return;
    }
    if (a !== '' && b !== '' && operation !== '' && result) {
      console.log(a, b, operation, result);
      if (key === '.') {
        a = '0' + '.';
        b = '';
        operation = '';
        result = false;
        display.value = a;
        return;
      }
      a = key;
      b = '';
      operation = '';
      result = false;
      display.value = a;
      return;
    }
    if (b === '' && operation === '') {
      if (key === '.' && b === '' && operation === '' && a === '') {
        console.log(a);
        a = '0' + '.';
        display.value = a;
        return;
      }
      if (key !== '0' && String(a).startsWith('0') && !String(a).startsWith('0.')) {
        a = key;
        display.value = a;
        return;
      }
      if (key === '.' && String(a).includes('.')) {
        display.value = a;
        return;
      }
      a += key;
      if (String(a).length > 9) {
        a = key;
        display.value = a;
        return;
      }
      display.value = a;
    } else if (a !== '' && b !== '' && result) {
      if (key === '.' && a !== '' && b !== '') {
        console.log(a, b, operation);
        a = '0' + '.';
        display.value = a;
        b = '';
        result = false;
        return;
      }
      b = key;
      result = false;
      display.value = b;
    } else {
      b += key;
      if (String(b).length > 9) {
        b = key;
        display.value = b;
        return;
      }
      display.value = b;
    }
    return;
  }

  // check if the pressed button is %
  if (key === '%') {
    if (a === '' && b === '' && !result) {
      return;
    }
    if (a !== '' && b !== '' && operation !== '' && !result) {
      switch (operation) {
        case '+':
          a = Number(a) + (Number(a) * Number(b)) / 100;
          console.log(a, b, operation, result);
          break;
        case '-':
          a = Number(a) - (Number(a) * Number(b)) / 100;
          break;
        case '*':
          a = (Number(a) * Number(b)) / 100;
          break;
        case '/':
          if (b === '0') {
            display.value = 'Error';
            a = '';
            b = '';
            operation = '';
            return;
          }
          a = Number(a) / (Number(b) / 100);
          break;
      }
      b = '';
      operation = key;
      if (String(a).includes('e') && String(a).length > 7) {
        a = Number(
          String(Number(String(a).split('e')[0]).toFixed(0)) +
            'e' +
            String(a).split('e')[1],
        );
      } else if (String(a).includes('.') && String(a).length >= 9) {
        a = Number(a.toFixed(7));
      }
      if (key === '=') {
        if (b === '') {
          b = a;
        }
      }
      display.value = a;
      return;
    }
    operation = '%';
    a = Number(a) / 100;
    if (String(a).includes('e') && String(a).length > 7) {
      a = Number(
        String(Number(String(a).split('e')[0]).toFixed(0)) +
          'e' +
          String(a).split('e')[1],
      );
    } else if (String(a).includes('.') && String(a).length >= 9) {
      a = Number(a.toFixed(7));
    }
    if (key === '=') {
      if (b === '') {
        b = a;
      }
    }

    display.value = a;
    console.log(a, b, operation, result);
    return;
  }

  // check if the pressed button is +/-
  if (key === '+/-') {
    if (a === '' && b === '' && !result) {
      return;
    }
    if (a !== '' && b === '' && !result) {
      a = Number(a) * -1;
      display.value = a;
      return;
    } else if (a !== '' && b !== '' && !result) {
      b = Number(b) * -1;
      display.value = b;
      return;
    } else if (a !== '' && b !== '' && result) {
      a = Number(a) * -1;
      display.value = a;
      return;
    }
  }

  // check if the pressed button is a sign
  if (signs.includes(key)) {
    evt.target.classList.add('active');
    if (a === '' && b === '' && !result) {
      return;
    }
    if (a !== '' && b !== '' && result) {
      b = '';
      operation = key;
      display.value = a;
      // display.value = operation;
    } else if (a !== '' && b !== '' && operation !== '') {
      switch (operation) {
        case '+':
          a = Number(a) + Number(b);
          break;
        case '-':
          a = a - b;
          break;
        case '*':
          a = a * b;
          break;
        case '/':
          if (b === '0') {
            display.value = 'Error';
            a = '';
            b = '';
            operation = '';
            return;
          }
          a = a / b;
          break;
      }
      b = '';
      operation = key;
      console.log(a, b, operation);
    }
    operation = key;
    // display.value = operation;
    result = false;
    console.log(a, b, operation, result);
  }

  // check if the pressed button is equal
  if (key === '=') {
    if (a === '' && b === '') {
      return;
    } else if (operation === '') {
      return;
    }
    if (b === '') {
      b = a;
    }
    switch (operation) {
      case '+':
        a = Number(a) + Number(b);
        break;
      case '-':
        a = a - b;
        break;
      case '*':
        a = a * b;
        break;
      case '/':
        if (b === '0') {
          display.value = 'Error';
          a = '';
          b = '';
          operation = '';
          return;
        }
        a = a / b;
        break;
    }

    if (String(a).includes('.') && String(a).includes('e')) {
      console.log(a, b, operation, result);
      a = Number(
        String(Number(String(a).split('e')[0]).toFixed(0)) +
          'e' +
          String(a).split('e')[1],
      );
    }
    console.log(a);
    if (String(a).includes('.') && !String(a).includes('e') && String(a).length > 9) {
      a = Number(a).toFixed(5);
      for (let i = 0; i <= String(a).length; i++) {
        if (String(a).endsWith('0')) {
          a = a.slice(0, -1);
        }
      }
    }
    if (String(a).length > 9) {
      a = 'Error';
      display.value = a;
      a = '';
      b = '';
      operation = '';
      return;
    }
    result = true;
    display.value = a;
    console.log(a, b, operation, result);
  }
});
