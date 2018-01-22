import React from 'react';
import Search from './Search';
import Filters from './Filters';
import InfiniteBeerCardGroup from './InfiniteBeerCardGroup';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Search />
                <Filters />
                <InfiniteBeerCardGroup />
            </div>
        );
    }
}



export default Main;