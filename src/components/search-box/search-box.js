import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Input } from '../my-styles';

import { getTitle } from '../../actions';

class SearchBox extends Component {

    state = {
        title: null
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getTitle(this.state.title);
        this.setState({
            title: null
        })
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    placeholder="input search text"
                    value={this.state.title}
                    onChange={this.handleChange}/>
                <div>
                    {this.state.title}
                </div>
            </Form>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTitle: (title) => dispatch(getTitle(title))
    };
}

export default connect(null, mapDispatchToProps)(SearchBox);
