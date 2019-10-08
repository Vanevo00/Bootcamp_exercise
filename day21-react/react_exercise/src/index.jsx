import React from 'react';
import ReactDOM from 'react-dom';

import Question from './question/index.jsx';
import './index.scss';
import './index.html';

const questionArr = [
  {
    question: 'How do you say "abnormal" in French?',
    user: 'Homer',
    date: "24 September",
    answer: 'anormal',
  },
  {
    question: 'How do you say “traitor” in Spanish?',
    user: 'Marge',
    date: "28 September",
    answer: 'Is incredible the similarities you see in both words, in spanish is “traidor” meaning that the only letter that was change was the “t” replaced by the “d”.So why is it too similar, well it comes from a latin word “traditor” meaning “that delivers” or “trader” from the verbs trādō, trāderee composed by “trans” that means “through” in spanish “a través” and even in italian this word is translated as “traditore” and dō, dare ("dar") in english “give”.',
  },
  {
    question: 'What is your opinion on houseplants?',
    user: 'Abe',
    date: "1 October",
    answer: 'My “opinion?” I have hundreds, thousands, possibly millions of opinions (depending on how you define opinion, i suppose,) on houseplants. How to - why to - select one…let’s see, how about ‘houseplants are great and everyone should have some.’ Oh wait, that’s two opinions. (Sigh.)',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
      {
        questionArr.map(question => (
          <Question 
            user={question.user}
            question={question.question}
            answerDate={question.date}
            answer={question.answer}
          />
        ))
      }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
