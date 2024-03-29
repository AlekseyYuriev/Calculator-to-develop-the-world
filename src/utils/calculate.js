// import constants
import { display } from './constants';

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

// AC (clear all function)
export function clearALL() {
  a = '';
  b = '';
  operation = '';
  result = false;
}

export function calculate(evt) {
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
      a = '0';
      display.value = a;
      return;
    } else if (key === '0' && a !== '0' && b !== '0' && operation !== '' && result) {
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
        b = '0' + '.';
        display.value = b;
        return;
      }
      display.value = a;
      return;
    } else if (key === '.' && a !== '' && String(b).includes('.') && !result) {
      display.value = b;
      return;
    } else if (key === '.' && a === '' && b === '' && operation !== '') {
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
      if (b !== '' && String(b).startsWith('0') && !String(b).includes('.')) {
        if (key === '.' && String(b).startsWith('0') && !String(b).includes('.')) {
          b = '0' + '.';
          display.value = b;
          return;
        }
        b = key;
        display.value = b;
        return;
      }
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
      if (key === 'Enter') {
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
    if (key === 'Enter') {
      if (b === '') {
        b = a;
      }
    }

    display.value = a;
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
    }
    operation = key;
    result = false;
  }

  // check if the pressed button is equal
  if (key === 'Enter') {
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
        if (b === '0' || Number(b) === 0) {
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
      a = Number(
        String(Number(String(a).split('e')[0]).toFixed(0)) +
          'e' +
          String(a).split('e')[1],
      );
    }
    if (String(a).includes('.') && !String(a).includes('e') && String(a).length > 9) {
      a = Number(a).toFixed(5);
      for (let i = 0; i <= String(a).length; i++) {
        if (String(a).endsWith('0')) {
          a = a.slice(0, -1);
        }
      }
      if (String(a).endsWith('.')) {
        a = a.slice(0, -1);
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
    if (a === Infinity || a === -Infinity) {
      a = 'Error';
      display.value = a;
      a = '';
      b = '';
      operation = '';
      return;
    }
    result = true;
    display.value = a;
  }
}
