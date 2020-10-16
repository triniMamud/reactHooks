import React, { Component } from 'react';
import BarSession from './bar/BarSession'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class AppNavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position= "static"> 
                    <BarSession />
                </AppBar>
            </div>
        );
    }
}

export default AppNavBar;