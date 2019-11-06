import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { DrawerContentComponentProps } from 'react-navigation-drawer/lib/typescript/src/types';

export const DrawerComponent = (props: DrawerContentComponentProps) => (
  <DrawerItems {...props} />
);
