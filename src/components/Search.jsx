import React from 'react';
import { Input, Button, Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/search';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchValue: "" }
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return (
            <Container fluid style={styles.Container}>
                <Input style={styles.SearchInput} value={this.state.searchValue} onChange={(event) => this.handleChange(event)} icon='search' placeholder="What's your poison?" />
                <Button style={styles.Button} onClick={() => this.props.onClick(this.state.searchValue)}>Search</Button>
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
        textAlign: 'center'
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (beer) => {
            dispatch(fetchBeers(beer))
        }
    }
}



export default connect(null, mapDispatchToProps)(Search);
