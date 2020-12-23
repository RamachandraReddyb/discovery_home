import React from 'react';
import { storiesOf } from '@storybook/react';
import LeftNav from '../components/molecules/navmenu';
import navmenu from '../components/templates/navmenu';


storiesOf('Organisms', module)
  .add('Navigation bar', () => <div style={{ backgroundColor: '#000'}}>
      <LeftNav menuItems={navmenu} textShow={false}/>
    </div>)
