import React from 'react';
import { Icon } from 'semantic-ui-react';
import { bookmark } from '../actions/bookmark';
import { connect } from 'react-redux';

class BookmarkButton extends React.Component {

    render() {
        const icon = this.props.isBookmarked === true ? <Icon name='bookmark' /> : <Icon name='remove bookmark' />;

        return (
            <div style={{ flex: 1, textAlign: 'center' }} onClick={() => this.props.onClick(this.props.id)}>
                {icon}
            </div>
        )
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
