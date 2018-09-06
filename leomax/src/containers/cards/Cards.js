import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {v4 as uuid} from 'uuid';
import {CardsComponent} from '../../components/index';
import '../../components/cards/Cards.css';
import connect from "react-redux/es/connect/connect";
import {
    selectedOptionsAction,
    selectedDueDateAction,
    surpriseCodeSubscribeAction,
    renewTheSubscriptionsAction
} from "../../actions";

class CardsContainer extends Component {
    name = uuid();
    constructor(props) {
        super(props);
        this.state = {
          selectedCard: null
        };
        this.onRadioChange = this.onRadioChange.bind(this);
        this.cardsHandler = this.cardsHandler.bind(this);
        this.dispatchSelectedCard = this.dispatchSelectedCard.bind(this);
        this.disabledHandler = this.disabledHandler.bind(this);
        this.validChecks = this.validChecks.bind(this);
    }

    disabledHandler(item) {
        if (item.props.value === "surpriseCode") {
           return this.props.state.Reducer.surpriseCodeSubscribe;
        }
    }

    cardsHandler(item) {
       return this.state.selectedCard === item.props.value
    }

    validChecks(event) {
        if (event.target.value === "surpriseCode") {
            this.props.surpriseCodeSubscribe(false);
        }

        if (event.target.value === "surpriseCode" || event.target.value === "qiwi" || event.target.value === "web" ) {
            this.props.renewTheSubscriptions(false);
        }
    }

    dispatchSelectedCard(event) {
        if (this.props.index === 1) {
            this.props.selectedOptions(event.target.value);
        } else if (this.props.index === 2) {
            this.props.selectedDueDate(event.target.value);
        }
    }

    onRadioChange(event) {
        this.setState( {selectedCard: event.target.value},
            this.dispatchSelectedCard(event),
            this.validChecks(event));


    }

    render() {
        return (
            <div className="Cards-flex">
                {
                    React.Children.map(this.props.children, (item, index) => (
                        <CardsComponent
                            key={index}
                            index={this.props.index}
                            name={this.name}
                            checked={this.cardsHandler(item)}
                            value={item.props.value}
                            label={item.props.label}
                            price={item.props.price}
                            onChange={this.onRadioChange}
                            textFirst={item.props.textFirst}
                            textSecond={item.props.textSecond}
                            textThird={item.props.textThird}
                            disabled={this.disabledHandler(item)}
                        />
                    ))
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
        selectedOptions: bindActionCreators(selectedOptionsAction, dispatch),
        selectedDueDate: bindActionCreators(selectedDueDateAction, dispatch),
        surpriseCodeSubscribe: bindActionCreators(surpriseCodeSubscribeAction, dispatch),
        renewTheSubscriptions: bindActionCreators(renewTheSubscriptionsAction, dispatch)
    }
}

export const WrappedCardsContainer = connect(putStateToProps, putActionToProps)(CardsContainer);