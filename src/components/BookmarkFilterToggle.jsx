import React from 'react';
import { filterByBookmark } from '../actions/filter';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

class BookmarkFilterToggle extends React.Component {

    render() {
        return (
            <div style={styles.Element}>
                <Checkbox toggle label="Show only Bookmarked" checked={this.props.filterState} onClick={() => this.props.onClick()} />
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


const mapStateToProps = state => {

    return {
        filterState: state.filters.bookmarkFilter

    }
}





export default connect(mapStateToProps, mapDispatchToProps)(BookmarkFilterToggle);
