import React from 'react';
import BookmarkFilterToggle from './BookmarkFilterToggle';
import LocationFilter from './LocationFilter';


class BookmarkLocationContainer extends React.Component {
    
    render() {
        return (
            <div style={styles.Container}>
                <LocationFilter/>
                <BookmarkFilterToggle/>
            </div>
        )
    }
}

const styles = {
    Container: {
        display:'flex',
        flexFlow:'column',
        flex: 1,
        margin: 10
    }
}



export default BookmarkLocationContainer;
