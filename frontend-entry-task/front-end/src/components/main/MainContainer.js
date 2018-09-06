import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Article, Navigation} from '../index.js';
import {FetchDataApi} from '../../actions/MainActions.js';
import './MainStyles.css';

class MainContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.Reducer.articles.length === 0) this.props.GetArticlesFromApi();
  }

  onFetchData = store => {
    let result;
    if (store.fetchingArticles) {
      result = "Загрузка данных...";
    } else {
      result = store.articles.map((item, index) => {
        return <Article
          key={index}
          caption={item.title}
          id={item.id}
          date={item.date}
          />
      })
    }

    return result;
  }

  render() {
    const store = this.props.state.Reducer;
      return (
        <div className="main" >
          <div>
            <Navigation />
          </div>
          <div className="main-flexArticles">
            {this.onFetchData(store)}
          </div>
        </div>
      )
  }
}

const putStateToProps = (state) => {
  return {
    state: state
  }
};

const putDispatchToProps = dispatch => {
  return {
    GetArticlesFromApi: bindActionCreators(FetchDataApi, dispatch)
  }
};

export const Main = connect(putStateToProps, putDispatchToProps)(MainContainer);
