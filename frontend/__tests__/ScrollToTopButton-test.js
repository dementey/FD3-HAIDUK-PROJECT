import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import ScrollButton from '../src/Components/LandingPage/SearchPage/ScrollToTopButton'

import 'raf/polyfill';



Enzyme.configure({ adapter: new Adapter() })

//*********************************

// global.requestAnimationFrame = function (callback) {
//   setTimeout(callback, 0)
// }

describe('>>>ScrollButton --- mount Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ScrollButton key={100} scrollStepInPx="80" />);

  });

  it('+++ renders ScrollButton', () => {
    expect(wrapper.props().scrollStepInPx).toEqual("80");
  });

});