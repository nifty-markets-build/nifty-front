import React from 'react';
import styled from 'styled-components';

import { 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Button 
} from 'reactstrap';

const ItemDiv = styled.div`
    width: 20%;
    margin: 0 2.5%;
`;


const Item = props => {
    return (
        <ItemDiv>
            <Card>
                <CardImg top width='100%' src={props.item.urlImg} alt="marketplace item"/>
                <CardBody>
                    <CardTitle>{props.item.name}</CardTitle>
                    <CardSubtitle>{props.item.gameName}</CardSubtitle>
                    <CardText>{props.item.description}</CardText>
                    <CardSubtitle>{props.item.cost}</CardSubtitle>
                    <Button>View</Button>
                </CardBody>
            </Card>
        </ItemDiv>
    );
}

export default Item;