import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { FilterTypes } from '../constants/FilterTypes';
import StrengthCheckbox from './StrengthCheckbox';

class StrengthFilter extends React.Component {
    state = { open: false }

    _onClick = (e) => {

        this.setState((prevState, props) => ({ open: prevState.open ? false : true }))
    }

    render() {
        const open = this.state.open

        return (
            <Accordion>
                <Accordion.Title active={open === false} index={0} onClick={this._onClick}>
                    <Icon name='dropdown' />
                    Strength
        </Accordion.Title>
                <Accordion.Content active={open === true}>
                    {
                        FilterTypes.Strength.map((strength) => <StrengthCheckbox name={strength.name} id={strength.id} key={strength.id} />
                        )
                    }

                </Accordion.Content>
            </Accordion>
        )
    }
}

export default StrengthFilter
