import React from 'react';
import { Icon } from 'semantic-ui-react';
import { bookmark } from '../actions/bookmark';
import { connect } from 'react-redux';

class BookmarkButton extends React.Component {

    render() {
        const icon = this.props.isBookmarked === true ? <Icon name='bookmark' /> : <Icon name='remove bookmark' />;

        return (
            <div style={styles.Element} onClick={() => this.props.onClick(this.props.id)}>
                {icon}
            </div>
        )
    }
}

const styles = {
    Element: {
        flex: 1,
        textAlign: 'center'
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
