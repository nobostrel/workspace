import React from 'react';
import {CommentComponent} from './Comment.jsx';

export class Comment extends React.Component {
    render() {
        return (
            <CommentComponent
                name={this.props.name}
                text={this.props.text}
            />
        )
    }
}
