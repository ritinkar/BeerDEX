import React from 'react';
import { Accordion, Icon, Container } from 'semantic-ui-react';
import { FilterTypes } from '../constants/FilterTypes';
import CategoriesCheckbox from './CategoriesCheckbox';

class CategoriesFilter extends React.Component {
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
        <Accordion.Title active={this.state.isOpen === false} index={0} onClick={this._onClick} >
          <Icon name='dropdown' />
          Categories
        </Accordion.Title>
        <Accordion.Content active={this.state.isOpen === true} >
          <Container fluid style={styles.Container} >
            {
              FilterTypes.Categories.map((category) => <CategoriesCheckbox name={category.name} id={category.id} key={category.id} style={styles.Checkboxes} />
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
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  Element: {
    flex: 2,
    margin: 0
  }

}

export default CategoriesFilter
