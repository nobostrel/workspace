import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationComponent} from './Navigation.jsx';
import {filterArticle} from '../../actions/MainActions';

class NavigationContainer extends React.Component {
  filter = event => {
    let filtering;
    if (event.target.id === "dateFilter") {
      filtering = this.props.state.Reducer.articles.sort((a, b) => {
        const left = a.date.match(/\d/g).join("");
        const right = b.date.match(/\d/g).join("");
        return right - left;
      })
    } else if (event.target.id === "articleFilter") {
      filtering = this.props.state.Reducer.articles.sort((a, b) => {
        return  a.title.toUpperCase().charCodeAt(0) - b.title.toUpperCase().charCodeAt(0)
      })
    }
    this.props.filterArticle(filtering);
  }

  render() {
      return (
        <NavigationComponent
          filter={this.filter}
        />
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
  filterArticle: bindActionCreators(filterArticle, dispatch)
}
};

export const Navigation = connect(putStateToProps, putDispatchToProps)(NavigationContainer);
