import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { playlistDeleted } from '../../actions';

import TrashIcon from '../../components/icons/trash-icon';

class TrashIconContainer extends Component {

    render(){
        const { playlist: {id} } = this.props;
        return (
            <TrashIcon deletePlaylist={() => this.props.deletePlaylist(id)} />
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePlaylist: (id) => {
            dispatch(playlistDeleted(id))
        }
    };
}

export default connect(null, mapDispatchToProps)(TrashIconContainer)
