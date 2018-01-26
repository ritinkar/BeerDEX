import React from 'react';
import { filterByStrength } from '../actions/filter';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

class StrengthCheckbox extends React.Component {

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
            dispatch(filterByStrength(id))
        }
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        filterState: state.filters.strengthFilters.includes(ownProps.id)

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(StrengthCheckbox);
