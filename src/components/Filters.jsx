import React from 'react';
import { Container, Accordion, Icon, Button, Divider } from 'semantic-ui-react';
import CategoriesFilter from './CategoriesFilter';
import StrengthFilter from './StrengthFilter';
import BookmarkLocationContainer from './BookmarkLocationContainer';
import { resetFilters } from '../actions/filter';
import { connect } from 'react-redux';


class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    _onClick = (event) => {

        this.setState((prevState, props) => ({ isOpen: prevState.isOpen ? false : true }))
    }

    _handleClose = (event) => {
        this.setState({ isOpen: false })
    }


    render() {
        return (
            <div style={styles.MainContainer}>
                <Accordion>
                    <Accordion.Title style={styles.Title} active={this.state.isOpen === false} index={0} onClick={this._onClick}>
                        <Icon name='filter' />
                        Filters
                </Accordion.Title>
                    <Accordion.Content active={this.state.isOpen === true} >
                        <Divider />
                        <Container fluid style={styles.Container}>
                            <CategoriesFilter style={{ flex: 3 }} />
                            <StrengthFilter style={{ flex: 2 }} />
                            <BookmarkLocationContainer style={{ flex: 1 }} />
                        </Container>
                        <Divider />
                        <div style={styles.ButtonsContainer}>
                            <Button content='Reset filters' onClick={() => this.props.onClick()} />
                            <Button content='Collapse filters' onClick={() => this._handleClose()} />
                        </div>

                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}

const styles = {
    MainContainer: {
        backgroundColor: 'white'
    },
    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    Title: {
        textAlign: 'center'
    },
    ButtonsContainer: {
        textAlign: 'center',
        padding: 10
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(resetFilters())
        }
    }
}




export default connect(null, mapDispatchToProps)(Filters);
