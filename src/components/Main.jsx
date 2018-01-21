import React from 'react';
import Search from './Search';
import Filters from './Filters';
import BeerCardGroup from './BeerCardGroup';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Search />
                <Filters />
                <BeerCardGroup />
            </div>
        );
    }
}



export default Main;