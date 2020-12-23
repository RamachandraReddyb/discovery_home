import React from 'react';
import LeftNav from '../../molecules/navmenu';

import './styles.css';
import navmenu from '../../templates/navmenu';

class Main extends React.Component {

    state = {
        show: false
    }

    toggleNav = () => {
        const mySidenav = document.getElementById("mySidenav");
        const main = document.getElementById("main");
        console.log(mySidenav.offsetWidth);
        if (mySidenav.offsetWidth === 100) {
            mySidenav.style.width = '250px';
            main.style.marginLeft = '250px';
            this.setState({ show: true });
        } else {
            mySidenav.style.width = '100px';
            main.style.marginLeft = '100px';
            this.setState({ show: false });
        }
    }

    render () {
        return (
            <React.Fragment>
                <div id="mySidenav" className="sidenav">
                    {/* <div>
                        <a href="#" className="closebtn" onClick={this.toggleNav}>&times;</a>
                    </div>                     */}
                    <div className="center">
                        <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt="Avatar" className="avatar" onClick={this.toggleNav} />
                    </div>
                    <div className="vertical-center">
                        <LeftNav menuItems={navmenu} textShow={this.state.show}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;
