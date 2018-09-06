import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WrappedCardsContainer, WrappedCheckboxContainer} from "../index";
import CardsComponent from "../../components/cards/Cards";
import Checkbox from "../../components/checkbox/Checkbox";
import '../../index.css';

class PaymentMethodBlock extends Component {
    render() {
        return (
            <div className="central-block">
                <h4 className="central-block-text"> Выберите способ оплаты: </h4>
                <WrappedCardsContainer index={1}>
                    <CardsComponent value="visa" label={require('../../img/visa.png')} />
                    <CardsComponent value="qiwi" label={require('../../img/qiwi.png')} />
                    <CardsComponent value="web" label={require('../../img/web.png')} />
                    <CardsComponent value="paypal" label={require('../../img/paypal.png')} />
                    <CardsComponent value="yad" label={require('../../img/yad.png')} />
                    <CardsComponent value="sms" textFirst="SMS" textThird="Только для России" />
                    <CardsComponent value="surpriseCode" textFirst="Подарочный код" />
                </WrappedCardsContainer>
                <WrappedCheckboxContainer>
                    <Checkbox value="subscribe" label="Покупаю подписку в подарок"  />
                </WrappedCheckboxContainer>
            </div>
        )
    }
}

function putStateToProps(state) {
    return {
        state: state
    }
}

export const WrappedPaymentMethod = connect(putStateToProps)(PaymentMethodBlock);