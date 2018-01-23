import React from 'react';
import { Accordion, Icon, Checkbox } from 'semantic-ui-react';
import { FilterTypes } from '../constants/FilterTypes';

class CategoriesFilter extends React.Component {
  state = { open: false }

  handleClick = (e) => {

    this.setState((prevState, props) => ({ open: prevState.open ? false : true }))
  }

  render() {
    const open = this.state.open

    return (
      <Accordion>
        <Accordion.Title active={open === false} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Categories
        </Accordion.Title>
        <Accordion.Content active={open === true}>
          {
            FilterTypes.Categories.map((category) => <Checkbox label={category.name} id={category.id} key={category.id} />
            )
          }

        </Accordion.Content>
      </Accordion>
    )
  }
}

export default CategoriesFilter
