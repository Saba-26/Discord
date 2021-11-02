import React, { Component } from 'react'
import './Sidebar.css';
import {mdiChevronDown} from '@material-ui/icons';

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
               <h2>I am sidebar</h2> 
               <div className="sidebar__top">
                   <h3>Programmer's Community</h3>
                   <mdiChevronDown/>
               </div>
            </div>
        )
    }
}

export default Sidebar;
