import React from 'react';

import DropDownForm from './DropDownForm';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import { ORDER_LIST, GENRE_LIST } from '../../constants/constant';


export default function SearchToolBar () {
  return (
    <Toolbar>
      <ToolbarGroup>
        <DropDownForm hashMap={ORDER_LIST} name={'order'}/>
        <DropDownForm hashMap={GENRE_LIST} name={'genre'}/>
      </ToolbarGroup>
    </Toolbar>
  );
}