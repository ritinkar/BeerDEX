import React from 'react';
import Search from './Search';
import Filters from './Filters';
import InfiniteBeerCardGroup from './InfiniteBeerCardGroup';
import Footer from './Footer';

class Main extends React.Component {

    render() {
        return (
            <div>
                <div style={styles.StickyDiv}>
                    <Search />
                </div>
                <Filters />
                <InfiniteBeerCardGroup />
                <Footer />
            </div >
        );
    }
}

const styles = {
    StickyDiv: {
        position: 'sticky',
        top: 0,
        zIndex: 9999

    }
}



export default Main;