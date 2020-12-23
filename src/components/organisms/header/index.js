import React from 'react';
import './style.css';
import FeatureImage from '../../templates/images/TLC_feature.png';
import shows from '../../templates/shows';
import HeadBlock from '../../molecules/headblock';
import Slider from '../../molecules/slider';
import Title from '../../atoms/title';

class Header extends React.Component {
    
    renderedList = () => {
        return shows.map(({ headings, images, id }) => {
            return (
                <div key={id}>
                    <Title  titleText={headings} classNames="header-text" />
                    <Slider images={images}/>
                </div>
            );
        })
    }

    render () {
        return (
            <React.Fragment>
                <div className="slider" style={{ backgroundImage: `url(${FeatureImage})` }}>
                    <ul className="header-nav">
                        <li className="active">For You</li>
                        <li>LifeStyle</li>
                        <li>TrueCrime</li>
                        <li>Home</li>
                        <li>Food</li>
                        <li>Adventure & Exploration</li>
                        <li>Documentation</li>
                        <li style={{float: 'right'}}>D+</li>
                    </ul>
                    <HeadBlock />
                </div>
                <div className="shows">
                    {this.renderedList()}
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
