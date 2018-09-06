import React, {Component} from 'react';
import {ResultComponent} from '../../components/index';

export class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.resultDataHandler = this.resultDataHandler.bind(this);
    }

    resultDataHandler() {
        let price = null;
        const {selectedDueDate, dueDates} = this.props.state.Reducer;
        if (selectedDueDate !== null) {
            dueDates.forEach(item => {
                if (selectedDueDate === item.dueDate) {
                    return price = item.price;
                }
            });
        }
        return price;
    }

    render() {
        return (
            <ResultComponent
                state={this.props.state}
                autoResabscribe={this.props.state.Reducer.renewTheSubscriptions ? "Далее 120 рублей в месяц" : null}
                numbers1={this.resultDataHandler()}
                numbers2={this.props.state.Reducer.addingDiscount ? 150 : null}
            />
        )
    }
}