import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

it('renders without crashing', () => {
  const main = (
  <Main header={(<div>Header</div>)}>
      <div>Main</div>
    </Main>
  );
  shallow(main);
});
