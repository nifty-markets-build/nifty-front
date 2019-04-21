import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { InputGroupAddon, InputGroup, Input } from 'reactstrap';

import { getMarketplace } from '../../actions';

import ItemList from './ItemList.js';

//search bar at the top
//game items displayed under that
class Marketplace extends React.Component {
    
    componentDidMount() {
        this.props.getMarketplace();
    }
    
    render() {
        return (
            <div>
                <h1>GamerMart</h1>

                <InputGroup>
                    <Input placeholder="Search games items..." />
                    <InputGroupAddon addonType="append">Search</InputGroupAddon>
                </InputGroup>

                <ItemList items={this.props.items} />
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        items: state.marketplace.items,
    }
}

export default connect(mapStateToProps, { getMarketplace })(Marketplace);