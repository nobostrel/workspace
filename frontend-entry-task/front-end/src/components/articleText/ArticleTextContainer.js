import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ArticleTextComponent} from './ArticleText.jsx';
import {showCommentAction, addCommentAction, FetchCommentsAction} from '../../actions/MainActions';

class ArticleTextContainer extends React.Component {
  fetchApi = () => {
    if (this.props.state.Reducer.comments.length === 0)
      this.props.getCommentsFromApi();
  }

  showCommentsHandler = () => {
    if (this.props.state.Reducer.showComments) {
      this.props.show(false);
    } else {
      this.fetchApi();
      this.props.show(true);
    }
  }

  AddCommentHandler = () => {
    if (this.props.state.Reducer.addComment) {
      this.props.add(false);
    } else {
      this.props.add(true);
    }
  }

  render() {
    return (
      <ArticleTextComponent
        showComments={this.showCommentsHandler}
          caption={this.props.caption}
          text="... Эх, тройка! птица тройка, кто тебя выдумал? знать, у бойкого народа ты могла только родиться, в той земле, что не любит шутить, а ровнем-гладнем разметнулась на полсвета, да и ступай считать версты, пока не зарябит тебе в очи. И не хитрый, кажись, дорожный снаряд, не железным схвачен винтом, а наскоро живьем с одним топором да долотом снарядил и собрал тебя ярославский расторопный мужик. Не в немецких ботфортах ямщик: борода да рукавицы, и сидит черт знает на чем; а привстал, да замахнулся, да затянул песню – кони вихрем, спицы в колесах смешались в один гладкий круг, только дрогнула дорога, да вскрикнул в испуге остановившийся пешеход – и вон она понеслась, понеслась, понеслась!.. И вон уже видно вдали, как что-то пылит и сверлит воздух."
          buttonHandler={this.props.state.Reducer.showComments}
          addComment={this.AddCommentHandler}
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
    show: bindActionCreators(showCommentAction, dispatch),
    add: bindActionCreators(addCommentAction, dispatch),
    getCommentsFromApi: bindActionCreators(FetchCommentsAction, dispatch)
  }
};

export const ArticleText = connect(putStateToProps, putDispatchToProps)(ArticleTextContainer);
