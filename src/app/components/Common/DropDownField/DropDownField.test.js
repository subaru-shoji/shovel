import React from 'react';
import { shallow } from 'enzyme';
import DropDownField from './DropDownField';

it('renders without crashing', () => {
  shallow(<DropDownField />);
});
