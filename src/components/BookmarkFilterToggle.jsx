import React from 'react';
import { filterByBookmark } from '../actions/filter';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

class BookmarkFilterToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: false
        }
    }

    _onClick() {
        this.setState((prevState) => ({ isOn: prevState.isOn ? false : true }))
        this.props.onClick()
    }

    render() {
        return (
            <div style={styles.Element}>
                <Checkbox toggle label="Show only Bookmarked" defaultChecked={this.state.isOn} onClick={() => this._onClick()} />
            </div>
        )
    }
}

const styles = {
    Element: {
        flex: 1,
        margin: 10
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(filterByBookmark())
        }
    }
}



export default connect(null, mapDispatchToProps)(BookmarkFilterToggle);
