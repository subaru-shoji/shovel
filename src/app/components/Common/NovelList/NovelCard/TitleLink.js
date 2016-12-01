import React from 'react';

import { NAROU_ROOT_URL } from '../../../../../constants';
import { linkItem, greyFont } from '../../../../styles/style.js';

const TitleLink = ({novel}) => {
  const fontColorStyle = novel.isRead ? greyFont : {};

  return (
    <a
      href={`${NAROU_ROOT_URL}/${novel.ncode}`}
      target="_blank"
      style={Object.assign({}, linkItem, fontColorStyle)}
    >
      {novel.title}
    </a>
  );
};

export default TitleLink;