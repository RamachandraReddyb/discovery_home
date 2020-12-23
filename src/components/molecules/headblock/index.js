import React from 'react';
import Title from '../../atoms/title';

export default () => {
    return (
        <React.Fragment>
            <div className="header-title">
                <Title classNames="fs-30 p-10" titleText="Playlist Title That"/>
                <Title classNames="fs-30 p-10" titleText="Spans Two Lines" />
            </div>
            <div className="sub-header-title">
                <Title classNames="fs-16" titleText="Short series description that can span two lines and"/>
                <Title classNames="fs-16" titleText=" be 80 characters and stuff." />
            </div>
        </React.Fragment>
    );
}
