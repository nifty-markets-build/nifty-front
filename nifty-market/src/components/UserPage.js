import React from 'react';
import { connect } from 'react-redux';

import { getUserItems } from '../actions';
import ItemList from '../components/Marketplace/ItemList.js';

class UserPage extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.getUserItems();
    }

    render() {
        return (
            <div className="UserPage">
                <h2>Hello User</h2>

                <div className="UserItems">
                    <ItemList items={this.props.userItems} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userItems: state.user.userItems
    }
}

export default connect(mapStateToProps, { getUserItems })(UserPage);