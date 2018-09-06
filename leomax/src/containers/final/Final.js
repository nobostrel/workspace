import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FinalComponent} from '../../components/index';

class Final extends Component{
    constructor(props) {
        super(props);
        this.hideBlocks = this.hideBlocks.bind(this);
    }

    hideBlocks() {
        return this.props.state.Reducer.selectedDueDate !== null ? "inp" : "hide-block";
    }

    render() {
        return (
            <FinalComponent
                value={this.props.value}
                hideButton={this.hideBlocks()}
            />
        )
    }
}

function putStateToProps(state) {
    return {
        state: state
    }
}

export const WrappedFinal = connect(putStateToProps)(Final);