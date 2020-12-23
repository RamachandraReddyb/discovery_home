import React from 'react';
import { storiesOf } from '@storybook/react';
import '../components/organisms/header/style.css';

import HeadBlock from '../components/molecules/headblock';

storiesOf('Molecules', module)
  .add('Title text', () => 
      <div style={{ backgroundColor: '#000'}}>
          <HeadBlock />
      </div>)
