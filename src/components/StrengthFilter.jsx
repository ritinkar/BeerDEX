import React from 'react';
import { Accordion, Icon, Container } from 'semantic-ui-react';
import { FilterTypes } from '../constants/FilterTypes';
import StrengthCheckbox from './StrengthCheckbox';

class StrengthFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    _onClick = (event) => {

        this.setState((prevState, props) => ({ isOpen: prevState.isOpen ? false : true }))
    }

    render() {
        return (
            <Accordion style={styles.Element}>
                <Accordion.Title active={this.state.isOpen === false} index={0} onClick={this._onClick}>
                    <Icon name='dropdown' />
                    Strength
                </Accordion.Title>
                <Accordion.Content active={this.state.isOpen === true}>
                    <Container fluid style={styles.Container} >
                        {
                            FilterTypes.Strength.map((strength) => <StrengthCheckbox name={strength.name} id={strength.id} key={strength.id} />
                            )
                        }
                    </Container>
                </Accordion.Content>
            </Accordion>
        )
    }
}


const styles = {
    Container: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
    },
    Element: {
        flex: 1,
        margin: 0
    }
}

export default StrengthFilter
