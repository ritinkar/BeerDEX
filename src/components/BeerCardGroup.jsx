import React from 'react';
import BeerCard from './BeerCard';
import { Card } from 'semantic-ui-react';


class BeerCardGroup extends React.Component {
    render() {
        return (
            <Card.Group textAlign='center' style={{ justifyContent: 'center' }}>
                {this.props.beers.map((beer) =>
                    <BeerCard key={beer.id} {...beer} />
                )}
            </Card.Group>
        )
    }
}



export default BeerCardGroup;