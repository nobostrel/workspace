import React from 'react';
import {connect} from 'react-redux';
import {AddCommentComponent} from './AddComment.jsx';
import {onFormSubmit} from '../../api/SubmitApi';
import './AddCommentStyles.css';

class AddCommentContainer extends React.Component {
  state = {
    name: null,
    textarea: null
  }

  onTextChange = event => {
    if (event.target.type === "text") {
      this.setState({name: event.target.value});
    } else {
      this.setState({textarea: event.target.value});
    }
    event.preventDefault();
  }

  submitForm = () => {
    let data = {
      user: this.state.name,
      text: this.state.textarea,
      article: this.props.path.replace("/content/", "")
    }
    onFormSubmit("/api/comment",
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  render() {
    return (
      <AddCommentComponent
        submit={this.submitForm}
        onChange={this.onTextChange}
      />
    )
  }
}

export const AddComment = connect()(AddCommentContainer);
