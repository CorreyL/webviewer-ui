import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '../Dropdown';

const t = jest.fn();
const setSortStrategy = jest.fn();

test('initial state of Dropdown', () => {
  // Arrange
  /**
   * @todo Add constants that will be compared against in the `Assert` section
   */
  // Act
  render(
    <Dropdown
      t={t}
      items={[]}
      setSortStrategy={setSortStrategy}
      sortStrategy={''}
    />
  );
  // Assert
  /**
   * @todo Assert state of the rendered DOM nodes against expected constants in
   * the `Arrange` section
   */
});
