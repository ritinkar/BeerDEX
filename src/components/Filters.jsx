import React from 'react';
import { Container, Accordion, Icon } from 'semantic-ui-react';
import CategoriesFilter from './CategoriesFilter';
import StrengthFilter from './StrengthFilter';
import BookmarkFilterToggle from './BookmarkFilterToggle';


//stub for filters
class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    _onClick = (event) => {

        this.setState((prevState, props) => ({ isOpen: prevState.isOpen ? false : true }))
    }

    render() {
        return (
            <Accordion>
                <Accordion.Title active={this.state.isOpen === false} index={0} onClick={this._onClick}>
                    <Icon name='filter' />
                    Filters
                </Accordion.Title>
                <Accordion.Content active={this.state.isOpen === true} >
                    <Container fluid style={styles.Container}>
                        <CategoriesFilter style={{ flex: 3 }} />
                        <StrengthFilter style={{ flex: 2 }} />
                        <BookmarkFilterToggle style={{ flex: 1 }} />
                    </Container>

                </Accordion.Content>
            </Accordion>
        )
    }
}

const styles = {
    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 10,
    }
}




export default Filters;