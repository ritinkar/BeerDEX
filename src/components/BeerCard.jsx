import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ActionBar from './ActionBar';

const BeerCard = (props) => (
    <Card >
        <Image style={{ height: 250, objectFit: 'cover' }} src={props.labels ? props.labels.large : "https://i.imgur.com/loNMltH.jpg"} />
        <Card.Content>
            <Card.Header>
                {props.nameDisplay}
            </Card.Header>
            <Card.Description>
                {props.style ? props.style.name : ""}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ActionBar id={props.id} abv={props.abv} isBookmarked={props.isBookmarked} />
        </Card.Content>
    </Card>
)

export default BeerCard;