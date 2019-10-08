import React from 'react';
import './question.scss';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      counter: null,
    }
  }
  
  handleClick = () => {
    !this.state.selected ? this.setState({selected: true}) : this.setState({selected: false});
    this.setState({counter: this.state.counter += 1});
  }
  
  render() {
    let likeBtn = this.state.selected ? "far fa-thumbs-up blue" : "far fa-thumbs-up";
    

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
        <div className="like">
          <i className={likeBtn} onClick={this.handleClick}></i>
          {this.state.counter}
        </div>
      </div>
    );
  }
}
