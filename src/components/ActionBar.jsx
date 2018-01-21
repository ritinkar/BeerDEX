import React from 'react';
import BookmarkButton from './BookmarkButton';

const ActionBar = (props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ flex: 1, textAlign: 'center' }}>{props.abv?props.abv+" %abv":"abv info not available"}</p>
        <BookmarkButton id={props.id} isBookmarked={props.isBookmarked} />
    </div>)

export default ActionBar;