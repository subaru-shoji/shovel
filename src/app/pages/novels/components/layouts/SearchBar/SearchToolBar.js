import React from 'react';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import DropDownForm from '../DropDownField';

import { ORDER_LIST, GENRE_LIST } from '../../../constants';


const SearchToolBar = () => {
  return (
    <Toolbar>
      <ToolbarGroup>
        <DropDownForm hashMap={ORDER_LIST} name={'order'}/>
        <DropDownForm hashMap={GENRE_LIST} name={'genre'}/>
      </ToolbarGroup>
    </Toolbar>
    );
}

export default SearchToolBar;
