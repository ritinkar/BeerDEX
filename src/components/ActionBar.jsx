import React from 'react';
import BookmarkButton from './BookmarkButton';

const ActionBar = (props) => (
    <div style={styles.MainContainer}>
        <p style={styles.AbvInfo}>{props.abv ? props.abv + " %abv" : "abv info not available"}</p>
        <BookmarkButton id={props.id} isBookmarked={props.isBookmarked} />
    </div>)

const styles = {
    MainContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    AbvInfo: {
        flex: 1,
        textAlign: 'center'
    }
}

export default ActionBar;