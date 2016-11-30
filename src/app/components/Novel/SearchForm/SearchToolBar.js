import React from 'react';

import DropDownForm from './../../Common/DropDownField';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import { ORDER_LIST, GENRE_LIST } from '../../../../constants';


export default SearchToolBar = () => {
  return (
    <Toolbar>
      <ToolbarGroup>
        <DropDownForm hashMap={ORDER_LIST} name={'order'}/>
        <DropDownForm hashMap={GENRE_LIST} name={'genre'}/>
      </ToolbarGroup>
    </Toolbar>
  );
}
