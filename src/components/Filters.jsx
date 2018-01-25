import React from 'react';
import { Container, Accordion, Icon } from 'semantic-ui-react';
import CategoriesFilter from './CategoriesFilter';
import StrengthFilter from './StrengthFilter';
import BookmarkLocationContainer from './BookmarkLocationContainer';


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
            <div style={{backgroundColor:'white'}}>
                <Accordion>
                    <Accordion.Title style={styles.Title} active={this.state.isOpen === false} index={0} onClick={this._onClick}>
                        <Icon name='filter' />
                        Filters
                </Accordion.Title>
                    <Accordion.Content active={this.state.isOpen === true} >
                        <Container fluid style={styles.Container}>
                            <CategoriesFilter style={{ flex: 3 }} />
                            <StrengthFilter style={{ flex: 2 }} />
                            <BookmarkLocationContainer style={{ flex: 1 }} />
                        </Container>

                    </Accordion.Content>
                </Accordion>
            </div>
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
    },
    Title: {
        textAlign: 'center'
    }
}




export default Filters;