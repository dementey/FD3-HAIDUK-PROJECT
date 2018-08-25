import React from 'react';
import PropTypes from 'prop-types';
import ScrollButton from '../src/Components/LandingPage/SearchPage/ScrollToTopButton'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
// и напишем наш тест для компонента

//*********************************



describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const styleProps = {
    scrollStepInPx: "80", delayInMs: "10"
  };
  beforeEach(() => {
    wrapper = shallow(<ScrollButton scrollStepInPx="80" delayInMs="10" />);

  });

  it('+++ contains output', () => {
    expect(wrapper.props().styleProps).to.equal(styleProps);
  });
  console.log(wrapper.props());
});