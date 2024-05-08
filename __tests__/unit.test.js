// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


describe('isPhoneNumber', () => {
  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('valid phone number without parentheses', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('invalid phone number with extra dash', () => {
    expect(isPhoneNumber('123-456--01')).toBe(false);
  });
  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('123-456-ABCD')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('email@example.com')).toBe(true);
  });
  test('valid email with underscore', () => {
    expect(isEmail('first_name@example.com')).toBe(true);
  });
  test('invalid email with no @', () => {
    expect(isEmail('email@')).toBe(false);
  });
  test('invalid email with missing dot', () => {
    expect(isEmail('email@examplecom')).toBe(false);
  });
});


describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Abc1234')).toBe(true);
  });
  test('valid strong password with underscore', () => {
    expect(isStrongPassword('Abc_123')).toBe(true);
  });
  test('invalid strong password too short', () => {
    expect(isStrongPassword('A1b')).toBe(false);
  });
  test('invalid strong password with special character', () => {
    expect(isStrongPassword('Abc@1234')).toBe(false);
  });
});


describe('isDate', () => {
  test('valid date format', () => {
    expect(isDate('12/25/2020')).toBe(true);
  });
  test('valid date format with one-digit month and day', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('invalid date format with too many digits in year', () => {
    expect(isDate('12/25/202')).toBe(false);
  });
  test('invalid date format with dashes', () => {
    expect(isDate('12-25-2020')).toBe(false);
  });
});


describe('isHexColor', () => {
  test('valid hex color 3 digits', () => {
    expect(isHexColor('#abc')).toBe(true);
  });
  test('valid hex color 6 digits', () => {
    expect(isHexColor('#a1b2c3')).toBe(true);
  });
  test('invalid hex color with 5 digits', () => {
    expect(isHexColor('#12345')).toBe(false);
  });
  test('invalid hex color non-hex characters', () => {
    expect(isHexColor('#g12345')).toBe(false);
  });
});
