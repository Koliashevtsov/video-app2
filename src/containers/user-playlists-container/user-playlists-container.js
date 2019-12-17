import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserPlaylists } from '../../components/video-view-items';


class UserPlaylistsContainer extends Component {
    render(){
        return (
            <UserPlaylists
                listUserPlaylists={this.props.listUserPlaylists}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUserPlaylists: state.listUserPlaylists
    };
}

export default connect(mapStateToProps)(UserPlaylistsContainer);
