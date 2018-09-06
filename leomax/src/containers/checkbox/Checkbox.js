import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Checkbox} from '../../components/index';
import connect from "react-redux/es/connect/connect";
import {addingDiscountAction, renewTheSubscriptionsAction, surpriseCodeSubscribeAction} from "../../actions/index";

class CheckboxContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
        this.subscribeHandler = this.subscribeHandler.bind(this);
        this.switchCheck = this.switchCheck.bind(this);
        this.subscribeClassName = "input";
        this.subscribeLabel = "label";
    }

    switchCheck(item) {
        const {selectedOptions} = this.props.state.Reducer;

        if (selectedOptions === "surpriseCode") {
            if (item.props.value === "subscribe") {
                return false
            }
        } else if (selectedOptions === "surpriseCode"
            || selectedOptions === "qiwi"
            || selectedOptions === "web" ) {
            if (item.props.value === "subscribeAgain") {
                return false
            }
        }
       return this.state[item.value];
    }

    subscribeHandler(item) {
        const {selectedOptions} = this.props.state.Reducer;

        if (item.props.value === "subscribe") {

                if (selectedOptions === "surpriseCode") {
                    this.subscribeClassName = "inputOff";
                    this.subscribeLabel = "labelOff";
                } else {
                    this.subscribeClassName = "input";
                    this.subscribeLabel = "label";
                }

        } else if (item.props.value === "subscribeAgain") {

                if (selectedOptions === "surpriseCode"
                    || selectedOptions === "qiwi"
                    || selectedOptions === "web") {
                    this.subscribeClassName = "inputOff";
                    this.subscribeLabel = "labelOff";
                } else {
                    this.subscribeClassName = "input";
                    this.subscribeLabel = "label";
                }

        }
    }

    handleChange (event) {
        if (event.target.value === "subscribe") {
            this.props.surpriseCodeSubscribe(event.target.checked);
        } else if (event.target.value === "subscribeAgain") {
            this.props.renewTheSubscriptions(event.target.checked);
        } else if (event.target.value === "addingDiscount") {
            this.props.addingDiscount(event.target.checked);
        } else {
            this.setState({[event.target.value]: event.target.checked});
        }
    }

    render() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, (item, index) => {
                       this.subscribeHandler(item);
                        return <Checkbox
                                key={index}
                                className={this.subscribeClassName}
                                labelClass={this.subscribeLabel}
                                onChange={this.handleChange}
                                checked={this.switchCheck(item)}
                                value={item.props.value}
                                label={item.props.label}
                                price={item.props.price}
                         /> }
                    )
                }
            </div>
        );
    }
}

function putStateToProps(state) {
    return {
        state: state
    }
}

function putActionToProps(dispatch) {
    return {
        surpriseCodeSubscribe: bindActionCreators(surpriseCodeSubscribeAction, dispatch),
        renewTheSubscriptions: bindActionCreators(renewTheSubscriptionsAction, dispatch),
        addingDiscount: bindActionCreators(addingDiscountAction, dispatch)
    }
}

export const WrappedCheckboxContainer = connect(putStateToProps, putActionToProps)(CheckboxContainer);