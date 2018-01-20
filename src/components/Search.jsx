import React from 'react';
import { Input, Button, Container, Header } from 'semantic-ui-react';


class Search extends React.Component {

    render() {
        return (
            <Container fluid style={styles.Container}>
                <Input style={styles.SearchInput} icon='search' placeholder="What's your poison?" />
                <Button style={styles.Button}>Search</Button>
                <Header style={styles.Header} size='huge'>BeerDEX</Header>
            </Container>
        );
    }
}

const styles = {
    Container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    SearchInput: {
        flex: 6,

    },
    Button: {
        flex: 1
    },
    Header: {
        flex: 3,
    }

}


export default Search;