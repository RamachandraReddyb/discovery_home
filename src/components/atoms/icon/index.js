import React from 'react';

const Icon = ({classNames, style, image, alt }) => {
    return (
        <img className={classNames} style={style} src={image} alt={alt}/>
    );
}

export default Icon;
