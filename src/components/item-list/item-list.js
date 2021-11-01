import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {
        const { data, onItemSelected } =  props;

        const idRegExp = /\/([0-9]*)\/$/;
        const items = data.map(({url, name}) => {
            const id = url.match(idRegExp)[1];
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                <div className="text-item-list">{name}</div>
            </li>
            )
        })
        
        return (
            <ul className="item-list list-group">
               {items}
            </ul>
        );
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemList;