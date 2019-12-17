import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playlistEdited } from '../../actions';

import FormComponent from '../../components/form-component';

class EditPlaylistContainer extends Component {

    state = {
        term: ''
    }

    componentDidMount(){
        this.setState({
            term: this.props.playlist.playlistName
        })
    }

    changeTerm = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    submitTerm = (e) => {
        const id = this.props.playlist.id;
        const newName = this.state.term;
        e.preventDefault();
        this.props.editPlaylistName(id, newName)
        this.setState({
            term: ''
        })
        this.props.toggleModal()
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
        editPlaylistName: (id, newName) => {
            dispatch(playlistEdited(id, newName))
        }
    };
}
export default connect(null, mapDispatchToProps)(EditPlaylistContainer)
