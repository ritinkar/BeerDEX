import React from 'react';
import { filterByLocation } from '../actions/filter';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

class LocationFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: ""
        }
    }

    _handleChange(event) {
        this.setState({ location: event.target.value })
    }

    _handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onClick(this.state.location)
        }
    }



    render() {
        return (
            <div style={styles.Element}>
                <Input list='locations' value={this.state.location} onKeyPress={(event) => this._handleKeyPress(event)} onChange={(event) => this._handleChange(event)} placeholder='Filter by location' />
                <datalist id='locations'>
                    {this.props.locations.map((location) => (<option value={location} key={location} />))
                    }

                </datalist>
            </div>
        )
    }
}

const styles = {
    Element: {
        flex: 1,
        margin: 10
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (location) => {
            dispatch(filterByLocation(location))
        }
    }
}

const mapStateToProps = state => {
    const nestedLocations = state.beers.items.map((beer) => {
        if (beer.breweries) {
            const breweryLocations = beer.breweries.map((brewery) => {
                if (brewery.locations) {
                    const regions = brewery.locations.map((region) => {
                        return region.region ? region.region : null
                    }
                    )
                    return regions;
                }
                else {
                    return null;
                }
            })
            return breweryLocations
        }
        else {
            return null;
        }
    }
    );
    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    }
    const locationsWithDuplicates = flatten(nestedLocations).filter((location) => location !== null)
    const locations = Array.from(new Set(locationsWithDuplicates));

    return {
        locations

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
