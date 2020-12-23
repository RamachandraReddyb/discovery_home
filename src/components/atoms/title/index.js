import React from 'react';

export default ({ titleText, classNames }) => {
    return (
        <React.Fragment>
            <div className={classNames}>{titleText}</div>
        </React.Fragment>
    );
}
