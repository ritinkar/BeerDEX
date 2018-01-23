import React from 'react';
import { filterByCategory } from '../actions/filter';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

class CategoriesCheckbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: false
        }
    }

    _onClick() {
        this.setState((prevState) => ({ isOn: prevState.isOn ? false : true }))
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <Checkbox label={this.props.name} defaultChecked={this.state.isOn} onClick={() => this._onClick()} />
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(filterByCategory(id))
        }
    }
}



export default connect(null, mapDispatchToProps)(CategoriesCheckbox);
