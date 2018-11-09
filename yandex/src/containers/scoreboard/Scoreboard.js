import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {Search} from '../../components/index';
import {FlyghtInfoBlock} from '../../components/index';
import data from '../../data.json';
import {
    flyInSetDataAction,
    comeFlySetDataAction,
    delayedFlightsSetDataAction,
    searchSetDataAction
} from '../../actions/index';
import './Scoreboard.css';

class ScoreboardContainer extends Component {
    state = {
        searchInputValue: null
    }

    onSearchInputChange = event => {
        this.setState({searchInputValue: event.target.value})
    }

    onSearchButtonClick = event => {
        const searchDataArray = [];
        for (let key in data) {
            data[key].map( item => {
                if (this.state.searchInputValue === item.flyghtNumber) searchDataArray.push(item);
            })
        }
        this.props.searchSetDataAction(searchDataArray);
    }

    infoHandler = event => {
        if (event.target.value === "flyIn") {
            this.props.flyInSetDataAction(data.flyIn);
        } else if (event.target.value === "comeFly") {
            this.props.comeFlySetDataAction(data.comeFly);
        } else if (event.target.value === "delayedFlight") {
            this.props.delayedFlightsSetDataAction(data.delayedFlights);
        }
    }

    render() {
        return (
            <section className="scoreboard">
                <nav className="scoreboard__navigation">
                    <Button value="flyIn" type="default" icon="rise" size="large" onClick={this.infoHandler} >Вылет</Button>
                    <Button value="comeFly" type="default" icon="fall" size="large" onClick={this.infoHandler} >Прилет</Button>
                    <Button value="delayedFlight" type="default" icon="clock-circle" size="large" onClick={this.infoHandler} >Задержанные</Button>
                    <Search width="300" onClick={this.onSearchButtonClick} onChange={this.onSearchInputChange} />
                </nav>
                <div className="scoreboard__columnsName">
                    <div> Дата и время </div>
                    <div> № Рейса </div>
                    <div> Аэропорт </div>
                    <div> Терминал </div>
                    <div> Статус </div>
                </div>
                {this.props.state.Reducer.data.map( (item, index) => {
                    return <FlyghtInfoBlock 
                                key={index}
                                date={item.date} 
                                flyghtNumber={item.flyghtNumber} 
                                airport={item.airport} 
                                terminal={item.terminal}
                                status={item.status} />
                } )}
            </section>
        )
    }
}

function putStateToProps(state) {
    return {
        state: state
    }
}

function putActionToProps(dispatch) {
    return {
        flyInSetDataAction: bindActionCreators(flyInSetDataAction, dispatch),
        comeFlySetDataAction: bindActionCreators(comeFlySetDataAction, dispatch),
        delayedFlightsSetDataAction: bindActionCreators(delayedFlightsSetDataAction, dispatch),
        searchSetDataAction: bindActionCreators(searchSetDataAction, dispatch)
    }
}

export const Scoreboard = connect(putStateToProps, putActionToProps)(ScoreboardContainer);