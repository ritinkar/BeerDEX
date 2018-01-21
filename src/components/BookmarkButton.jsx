import React from 'react';
import FontAwesome from 'react-fontawesome';
import { bookmark } from '../actions/bookmark';
import { connect } from 'react-redux';

class BookmarkButton extends React.Component {

    render() {
        let icon = null;
        if (this.props.isBookmarked === true) {
            icon = <FontAwesome name='bookmark' style={styles.active} />
        }
        else {
            icon = <FontAwesome name='bookmark' />
        }
        return (
            <div style={{ flex: 1, textAlign: 'center' }} onClick={() => this.props.onClick(this.props.id)}>
                {icon}
            </div>
        )
    }
}

const styles = {
    active: {
        color: 'red'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(bookmark(id))
        }
    }
}



export default connect(null, mapDispatchToProps)(BookmarkButton);
