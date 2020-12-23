import React from 'react';

class Slider extends React.Component {

    renderedList = () => {
        return this.props.images.map((image, index) => {
              return <img key={index} src={image} alt="img"/>;
        });
    }

    render () {
        return (
            <div className="site">
                { this.renderedList() }
            </div>
        );
    }
}

export default Slider;
