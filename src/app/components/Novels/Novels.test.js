import React from 'react';
import { shallow } from 'enzyme';
import Novels from './Novels';

it('renders without crashing', () => {
  shallow(<Novels />);
});
