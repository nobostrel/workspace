import React from 'react';
import {connect} from 'react-redux';
import {Comment} from '../index.js';
import './CommentsStyles.css';

class CommentsContainer extends React.Component {
  getComments = store => {
    let result;
    if (store.showComments) {
      if (store.fetchingComments) {
        result = <p>Загрузка данных...</p>
      } else if (!store.fetchingComments && store.comments.length !== 0) {
        result = store.comments.records.map((item, index) => {
          if (this.props.path === `/content/${item.article}`) {
            return <Comment key={index} name={item.user} text={item.text} />
          }
        })
      }
    }
    return result;
  }

  render() {
    const store = this.props.state.Reducer;
    return (
      <div className="comments-block" >
        {this.getComments(store)}
      </div>
    )
  }
}

const putStateToProps = (state) => {
  return {
    state: state
  }
};

export const Comments = connect(putStateToProps)(CommentsContainer);
