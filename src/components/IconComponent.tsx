import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';

import { text } from '../styles';

const IconComponent = (iconName: string) => (
  <FontAwesomeIcon
    icon={iconName}
    size={32}
    color={text.primaryText.color}
  />
);

export default IconComponent;
