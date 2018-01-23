import React from 'react';
import BeerCardGroup from './BeerCardGroup';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';


class InfiniteBeerCardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Load first 12 beers
            beers: this.props.beers.slice(0, 12),
            //if first load has less than 12 items then set hasMoreItems to false
            hasMoreItems: this.props.beers.slice(0, 12).length < 12 ? false : true,
            nextIndex: 12
        };
        this._loadBeers = this._loadBeers.bind(this);
        this._onScroll = this._onScroll.bind(this);
    }

    //everytime this component recieves new props reset State
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                beers: nextProps.beers.slice(0, 12),
                hasMoreItems: nextProps.beers.slice(0, 12).length < 12 ? false : true,
                nextIndex: 12
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll, false);
    }

    // get the next 12 beers
    _loadBeers() {
        let newBeers = this.props.beers.slice(this.state.nextIndex, this.state.nextIndex + 12)
        this.setState((prevState, props) => (
            {
                beers: [...prevState.beers, ...newBeers],
                hasMoreItems: newBeers.length < 12 ? false : true,
                nextIndex: prevState.nextIndex + 12
            }));
    }


    //load more items if we reach the end of the list
    _onScroll() {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 400) &&
            this.state.hasMoreItems
        ) {
            this._loadBeers()
        }
    }

    render() {

        const Beers = (<BeerCardGroup beers={this.state.beers} />)

        return (
            <Container fluid style={{ margin: 15, backgroundColor: '#F0F0F0' }}>
                {Beers}
            </Container>
        );
    }
};

const mapStateToProps = state => {
    //Apply filters one by one
    //Dont apply any filters if none are set

    const beersFilteredByBookmarked = state.filters.bookmarkFilter ? state.beers.items.filter((beer) => beer.isBookmarked) : state.beers.items
    const beersFilteredByCategories = state.filters.categoryFilters.length ?
        beersFilteredByBookmarked.filter((beer) => beer.style ? state.filters.categoryFilters.includes(beer.style.categoryId) : false) :
        beersFilteredByBookmarked
    const beersFilteredByStrength = state.filters.strengthFilters.length ?
        beersFilteredByCategories.filter((beer) => {
            let strength = 0;
            if (beer.abv <= 5) {
                strength = 3;
            }
            else if (beer.abv > 5 && beer.abv < 8) {
                strength = 2;
            }
            else if (beer.abv >= 8) {
                strength = 1;
            }
            return state.filters.strengthFilters.includes(strength)
        }) :
        beersFilteredByCategories

    return {
        beers: beersFilteredByStrength,
        lastUpdated: state.beers.lastUpdated
    }
}

export default connect(mapStateToProps, null)(InfiniteBeerCardGroup);