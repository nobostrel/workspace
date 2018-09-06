import React from 'react';
import {connect} from 'react-redux';
import './ContentStyles.css';
import {ArticleText, Comments, AddComment} from '../index.js';

class ContentContainer extends React.Component {
  addCheck = (store, locationPath) => {
    let value = null;
    if (store.addComment && !!store.showComments)
      value = <AddComment path={locationPath} />

    return value;
  }

  findPathInArticles = (store, locationPath) => {
    let path = locationPath;
    let add = this.addCheck(store, path);
    let result = <p>Запрашиваемая статья не существует</p>;

    if(store.articles.length !== 0) {
      result = store.articles.map((item, index) => {
        if (path === `/content/${item.id}`) {
          return <React.Fragment key={index}>
                    <ArticleText caption={item.title} />
                    {add}
                    <Comments path={path} />
                  </React.Fragment>
        }
      });
    }
    return result;
  }

  render() {
    const path = this.props.ownProps.location.pathname;
    const store = this.props.state.Reducer;
      return (
        <div className="content-block" >
          {this.findPathInArticles(store, path)}
        </div>
      )
  }
}

const putStateToProps = (state, ownProps) => {
  return {
    state: state,
    ownProps: ownProps
  }
};

export const Content = connect(putStateToProps)(ContentContainer);
