import React from 'react';
import {connect} from 'react-redux';
import {AddArticleComponent} from './AddArticle.jsx';
import {onFormSubmit} from '../../api/SubmitApi';
import './AddArticleStyles.css';

class AddArticleContainer extends React.Component {
  state = {
    text: null,
    textarea: null
  }


  onTextChange = event => {
    if (event.target.type === "text") {
      this.setState({text: event.target.value});
    } else {
      this.setState({textarea: event.target.value});
    }
    event.preventDefault();
  }

  submitForm = () => {
    let data = {
      title: this.state.text,
      text: this.state.textarea
    }
    onFormSubmit("/api/article",
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
      <AddArticleComponent
        submit={this.submitForm}
        onChange={this.onTextChange}
        />
    )
  }
}

export const AddArticle = connect()(AddArticleContainer);
