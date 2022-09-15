import React from 'react';
import { sections } from '../../data';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </DirectoryMenuContainer>
);

export default Directory;
