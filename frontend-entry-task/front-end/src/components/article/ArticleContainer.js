import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ArticleComponent} from "./Article.jsx";
import {deleteArticle} from '../../actions/MainActions.js';

class ArticleContainer extends React.Component {
  del = event => {
    let refreshArticles = this.props.state.Reducer.articles.filter(item =>
      item.id !== event.target.id)
    this.props.deleteArticle(refreshArticles);
  }

  dateParser = date => {
    let result = new Date(date);
    return result.toLocaleString();
  }

  render() {
    return (
      <ArticleComponent
        del={this.del}
        articlePath={this.props.id}
        caption={this.props.caption}
        date={this.dateParser(this.props.date)}
      />
    )
  }
}

const putStateToProps = state => {
  return {
    state: state
  }
};

const putDispatchToProps = dispatch => {
  return {
    deleteArticle: bindActionCreators(deleteArticle, dispatch)
  }
};

export const Article = connect(putStateToProps, putDispatchToProps)(ArticleContainer);
