import React from 'react';
import { shallow } from 'enzyme';
import NovelList from './NovelList';

it('renders without crashing', () => {
  shallow(<NovelList />);
});
