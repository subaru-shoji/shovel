import React from 'react';
import { shallow } from 'enzyme';
import NovelCard from './NovelCard';

it('renders without crashing', () => {
  shallow(<NovelCard />);
});
