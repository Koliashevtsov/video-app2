import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playlistCreated } from '../../actions';

import FormComponent from '../../components/form-component';

class CreatePlaylistContainer extends Component {

    state = {
        term: ''
    }

    changeTerm = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    submitTerm = (e) => {
        e.preventDefault();
        this.props.createNewPlaylist(this.state.term);
        this.setState({
            term: ''
        });
        this.props.toggleModal();
    }

    render(){
        return (
            <FormComponent
                forSubmit={this.submitTerm}
                forValue={this.state.term}
                forChange={this.changeTerm}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewPlaylist: (term) => {
            dispatch(playlistCreated(term))
        }
    };
}
export default connect(null, mapDispatchToProps)(CreatePlaylistContainer);
