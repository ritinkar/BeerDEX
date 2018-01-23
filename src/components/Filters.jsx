import React from 'react';
import { Container, Accordion, Icon, Checkbox } from 'semantic-ui-react';
import CategoriesFilter from './CategoriesFilter';
import StrengthFilter from './StrengthFilter';
import BookmarkFilterToggle from './BookmarkFilterToggle';


//stub for filters
class Filters extends React.Component {
    state = { isOpen: false }

    handleClick = (e) => {

        this.setState((prevState, props) => ({ isOpen: prevState.isOpen ? false : true }))
    }

    render() {
        return (
            <Accordion>
                <Accordion.Title active={this.state.isOpen === false} index={0} onClick={this.handleClick}>
                    <Icon name='filter' />
                    Filters
        </Accordion.Title>
                <Accordion.Content active={this.state.isOpen === true}>
                    <div>
                        <CategoriesFilter />
                        <StrengthFilter />
                        <BookmarkFilterToggle />
                    </div>

                </Accordion.Content>
            </Accordion>
        )
    }
}

const styles = {
    Container: {
        display: 'flex',
        textAlign: 'center',
        margin: 10
    }
}



export default Filters;