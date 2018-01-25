import React from 'react';
import Search from './Search';
import Filters from './Filters';
import InfiniteBeerCardGroup from './InfiniteBeerCardGroup';
import Footer from './Footer';

class Main extends React.Component {

    render() {
        return (
            <div>
                <div style={{ position: 'sticky', top: 0, zIndex:10 }}>
                    <Search />
                    <Filters />
                </div>
                <InfiniteBeerCardGroup />
                <Footer />
            </div >
        );
    }
}



export default Main;