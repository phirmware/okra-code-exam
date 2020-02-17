import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    render() {
        return (
            <span>
                <div id="mySidebar" className="sidebar">
                    <a className="closebtn" onClick={() => this.closeNav()}>×</a>
                    <Link to="/">Dashboard</Link>
                    <Link to="/transactions">Transactions</Link>
                    <Link to="/transfer"><span className="glyphicon glyphicon-transfer"></span>Transfer</Link>
                </div>
                <button className="openbtn" onClick={() => this.openNav()}>☰</button>
            </span>
        )
    }
}