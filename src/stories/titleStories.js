import React from 'react';
import { storiesOf } from '@storybook/react';


import Title from  '../components/atoms/title';

storiesOf('Title', module)
  .add('Header', () => <Title titleText="Plalist Title That
  Spans Two Lines" />)
  .add('Sub Header', () => <Title titleText="Short series description that can span two lines and
  be 80 characters and stuff.
  " />)
