import React from 'react';
import './index.scss';

export default class Question extends React.Component {
  render() {
    // return (
    //   <div className="contact">
    //     <div className="contact__name">
    //       { this.props.firstName } {this.props.lastName}
    //     </div>
    //     <div className="contact__email">{this.props.email}</div>
    //   </div>
    // );
    return (
      <div className="question-container">
        <div className="question-itself">
          {this.props.question}
        </div>
        <div className="aswering-user">
          <div className="userName">
            {this.props.user}
          </div>
          <div className="dateAnswer">
            Answered {this.props.answerDate}
          </div>
        </div>
        <div className="answer">
          {this.props.answer}
        </div>
      </div>
    );
  }
}
