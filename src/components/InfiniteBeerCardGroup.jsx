import React from 'react';
import BeerCardGroup from './BeerCardGroup';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';



class InfiniteBeerCardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Load first 12 beers
            beers: this.props.beers.slice(0, 12),
            //if first load has less than 12 items then set hasMoreItems to false
            hasMoreItems: this.props.beers.slice(0, 12).length<12?false:true,
            nextIndex: 12
        };
        this._loadBeers.bind(this);
    }

    //everytime this component recieves new props reset State
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                beers: nextProps.beers.slice(0, 12),
                hasMoreItems: nextProps.beers.slice(0, 12).length<12?false:true,
                nextIndex: 12
            });
        }
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

    render() {

        const Beers = (<BeerCardGroup beers={this.state.beers} />)

        return (

            <div >
                {Beers}
                {this.state.hasMoreItems ? (<Button onClick={() => this._loadBeers()}>Load more beers</Button>) : null}
            </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        beers: state.beers.items,
        lastUpdated: state.beers.lastUpdated
    }
}

export default connect(mapStateToProps, null)(InfiniteBeerCardGroup);