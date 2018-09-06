import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WrappedCheckboxContainer, ResultContainer} from "../index";
import Checkbox from "../../components/checkbox/Checkbox";
import '../../index.css';

class PaymentResultBlock extends Component {
    constructor(props) {
        super(props);
        this.hideBlocks = this.hideBlocks.bind(this);
    }

    hideBlocks() {
        return this.props.state.Reducer.selectedDueDate !== null ? "bottom-block" : "hide-block";
    }

    render() {
        return (
            <div className={this.hideBlocks()}>
                <h4 className="bottom-block-text"> Итого к оплате: </h4>
                <ResultContainer state={this.props.state} />
                <WrappedCheckboxContainer >
                    <Checkbox value="addingDiscount" label="Добавить подписку на скидку 5% на весь ассортимент товаров" price={150} />
                </WrappedCheckboxContainer>
                <p className="bottom-text">
                    Срок действия подписки 6 месяцев. Стоимость подписки 150 руб.
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

export const WrappedPaymentResult = connect(putStateToProps)(PaymentResultBlock);