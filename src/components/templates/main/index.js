import React from 'react';
import LeftNav from '../../organisms/leftnav';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
                <LeftNav />
                <div id="main">
                    <Header />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;
