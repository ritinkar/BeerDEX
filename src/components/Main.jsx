import React from 'react';
import Search from './Search';
import Filters from './Filters';
import InfiniteBeerCardGroup from './InfiniteBeerCardGroup';
import Footer from './Footer';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Search />
                <Filters />
                <InfiniteBeerCardGroup />
                <Footer />
            </div>
        );
    }
}



export default Main;