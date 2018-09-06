import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WrappedCardsContainer, WrappedCheckboxContainer} from "../index";
import CardsComponent from "../../components/cards/Cards";
import Checkbox from "../../components/checkbox/Checkbox";
import '../../index.css';

class SubscriptionSelectionBlock extends Component {
    constructor(props) {
        super(props);
        this.hideBlocks = this.hideBlocks.bind(this);
    }

    hideBlocks() {
        return this.props.state.Reducer.selectedOptions !== null ? "central-block-down" : "hide-block";
    }

    render() {
        return (
            <div className={this.hideBlocks()}>
                <h4 className="central-block-down-text">На какой срок:</h4>
                <WrappedCardsContainer index={2}>
                    <CardsComponent value="2year" textFirst="2 года" textSecond="2 880 руб." textThird="120 руб/месяц" price={2880} />
                    <CardsComponent value="1year" textFirst="1 год" textSecond="1 500 руб." textThird="125 руб/месяц" price={1500} />
                    <CardsComponent value="6month" textFirst="6 месяцев" textSecond="780 руб." textThird="130 руб/месяц" price={780} />
                </WrappedCardsContainer>
                <p className="text-up">
                    В конце срока подписка продлится автоматически.
                    Вы можете выключить автопродление в любой момент в настройках или отменить его
                </p>
                <WrappedCheckboxContainer>
                    <Checkbox value="subscribeAgain" label="Продлевать подписку автоматически"  />
                </WrappedCheckboxContainer>
                <p className="text-bottom">
                    Оплачивая подписку, я принимаю условия оплаты, указанные в оферте
                    и условия автоматического продления подписки на месяц вперед.
                </p>
            </div>
        )
    }
}

function putStateToProps(state) {
    return {
        state: state
    }
}

export const WrappedSubscriptionSelection = connect(putStateToProps)(SubscriptionSelectionBlock);