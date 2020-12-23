import React from 'react';
import { storiesOf } from '@storybook/react';
import shows from '../components/templates/shows';
import Slider from '../components/molecules/slider';
import Title from '../components/atoms/title';
import '../components/organisms/header/style.css';



storiesOf('Slider', module)
  .add('slides', () => 
  <div className="shows"> {
    shows.map(({ headings, images, id }) => {
        return (
            <div key={id}>
                <Title  titleText={headings} classNames="header-text" />
                <Slider images={images}/>
            </div>
        );
    })}
    </div>
  )
