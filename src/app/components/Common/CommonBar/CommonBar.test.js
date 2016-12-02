import React from 'react';
import { shallow } from 'enzyme';
import CommonBar from './CommonBar';

it('renders without crashing', () => {
  shallow(<CommonBar />);
});
