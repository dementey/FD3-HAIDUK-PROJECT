"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import IngredientsCheck from '../src/Components/LandingPage/IngredientsCheck/IngredientsCheck';

test('работа IngredientsCheck', () => {

  const component = renderer.create(
    <IngredientsCheck />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

    
});
