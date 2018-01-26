import React from 'react';
import BeerCard from './BeerCard';
import { Card } from 'semantic-ui-react';


class BeerCardGroup extends React.Component {
    render() {
        return (
            <Card.Group textAlign='center' style={styles.Element}>
                {this.props.beers.map((beer) =>
                    <BeerCard key={beer.id} {...beer} />
                )}
            </Card.Group>
        )
    }
}

const styles = {
    Element: {
        justifyContent: 'center'
    }
}



export default BeerCardGroup;