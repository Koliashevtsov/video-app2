import React, { Component } from 'react';
import { connect } from 'react-redux';

import InModalPlaylists from '../../components/in-modal-playlists';

class InModalPlaylistsContainer extends Component {

    render(){
        return (
            <InModalPlaylists
                list={this.props.listUserPlaylists}
                toggleClose={this.props.toggleClose}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listUserPlaylists: state.listUserPlaylists
    };
}
export default connect(mapStateToProps)(InModalPlaylistsContainer)
