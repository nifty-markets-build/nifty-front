import React from 'react';
import styled from 'styled-components';

import Item from './Item.js';

const ItemListDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;

const ItemList = props => {
    return (
        <ItemListDiv>
            {props.items.map(item => (
                <Item key={item.itemId} item={item} />
            ))}
        </ItemListDiv>
    );
}

export default ItemList;