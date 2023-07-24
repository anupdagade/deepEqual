import { render, screen } from '@testing-library/react';
import App from './App';


test('renders comparison result true', () => {
  const o1 = null;
  const o2 = null;

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});


test('renders comparison result', () => {
  const o1 = {};
  const o2 = {};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});


test('renders comparison result', () => {
  const o1 = {};
  const o2 = null;

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('false');
});

test('renders comparison result', () => {
  const o1 = {name: 'Bob'};
  const o2 = {name: 'Bob'};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});

test('renders comparison result', () => {
  const o1 = {name: 'Bob'};
  const o2 = {name: 'Bob', email: undefined};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});

test('renders comparison result', () => {
  const o1 = {name: 'Bob'};
  const o2 = {name: 'Bob', email: 'example@test.com'};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('false');
});


test('renders comparison result', () => {
  const o1 = {isBoolean: true};
  const o2 = {isBoolean: true, email: undefined};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});

test('renders comparison result', () => {
  const o1 = {number: 4};
  const o2 = {number: 4, email: undefined};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('true');
});

test('renders comparison result', () => {
  const o1 = {number: 4};
  const o2 = {number: 4, email: 'undefined'};

  render(<App obj1={o1} obj2={o2} />);

  expect(screen.getByTestId('comparison-result')).toHaveTextContent('false');
});
