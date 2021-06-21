import React, { Component } from 'react';

class menus extends Component {
    state = {}
    render() {
        return (
            <div className="useful_main border_right0">
                <h2 className="useful_text">Menus</h2>
                <ul >
                    {this.props.menus.map((menu) => <li><a href={menu.fields.menuLink}>{menu.fields.menuNames}</a></li>)}
                </ul>
            </div>
        );
    }
}

export default menus;