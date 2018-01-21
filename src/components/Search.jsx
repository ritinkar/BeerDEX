import React from 'react';
import { Input, Button, Container, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/search';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchValue: "" }
    }

    _handleChange(event) {
        this.setState({ searchValue: event.target.value })
    }


    render() {
        return (
            <Container fluid style={styles.Container}>
                <Form style={styles.Form}>
                    <Form.Field style={styles.SearchInput}>
                        <Input value={this.state.searchValue} onChange={(event) => this._handleChange(event)} icon='search' placeholder="What's your poison?" />
                    </Form.Field>
                    <div>
                        <Button style={styles.Button} onClick={() => this.props.onClick(this.state.searchValue)}>Search</Button>
                    </div>
                </Form>
                <div style={styles.Logo}>
                    <Header size='huge'>BeerDEX</Header>
                </div>

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
    Form: {
        flex: 7,
        display: 'flex'
    },
    Logo: {
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
