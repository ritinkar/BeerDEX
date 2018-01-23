import React from 'react';
import { Input, Header, Form } from 'semantic-ui-react';
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

    _handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onClick(this.state.searchValue)
        }
    }


    render() {
        const searchIcon = { name: 'search', circular: true, link: true, onClick: () => this.props.onClick(this.state.searchValue) }
        return (
            <div style={styles.Container}>
                <Form style={styles.Form}>
                    <Form.Field style={styles.SearchInput}>
                        <Input loading={this.props.isFetching} value={this.state.searchValue} onKeyPress={(event) => this._handleKeyPress(event)} onChange={(event) => this._handleChange(event)} icon={searchIcon} placeholder="What's your poison?" />
                    </Form.Field>
                </Form>
                <div style={styles.Logo}>
                    <Header size='huge'>BeerDEX</Header>
                </div>

            </div>
        );
    }
}

const styles = {
    Container: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#F0F0F0'
    },
    SearchInput: {
        flex: 1,
        marginLeft: 10

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

const mapStateToProps = state => {
    return {
        isFetching: state.beers.isFetching,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);
