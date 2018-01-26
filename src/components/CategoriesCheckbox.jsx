import React from 'react';
import { filterByCategory } from '../actions/filter';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

class CategoriesCheckbox extends React.Component {

    render() {
        return (
            <div style={{ flex: 1 }}>
                <Checkbox label={this.props.name} checked={this.props.filterState} onClick={() => this.props.onClick(this.props.id)} />
            </div>
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

const mapStateToProps = (state, ownProps) => {

    return {
        filterState: state.filters.categoryFilters.includes(ownProps.id)

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CategoriesCheckbox);
