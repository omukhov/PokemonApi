import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Bulbasaur
                </li>
                <li className="list-group-item">
                    Ivisaur
                </li>
                <li className="list-group-item">
                    Venusaur
                </li>
            </ul>
        );
    }
}