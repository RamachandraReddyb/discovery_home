import React from 'react';
import { storiesOf } from '@storybook/react';

import HomeIcon from '../components/templates/images/home-icon/large-56-x-56.png';

import Icon from '../components/atoms/icon';

storiesOf('Icons', module)
  .add('home', () => <Icon style={{backgroundColor: 'blue'}} classNames="Primary Button" alt="home" image={HomeIcon} />)
