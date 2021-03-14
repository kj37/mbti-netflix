import React from 'react'
import { question1 } from '../utils/question1'
import { question2 } from '../utils/question2'
import { question3 } from '../utils/question3'
import '../styles/Questions.scss'

export default class EachQuestion extends React.Component{
  render(){
    let question;
    if(this.props.genre == 1) question = question1
    if(this.props.genre == 2) question = question2
    if(this.props.genre == 3) question = question3
    return (<section className="on-test">
      <ul className="stepper">
        {question.map((each, idx)=>{
          return <li key={idx} className="step">
            {idx == this.props.curPos-1 ? <div className="active">{idx+1}</div> : <div className="inactive"></div>}
          </li>
        })}
      </ul>
      <div className="question">
        <h2 style={{textAlign: 'center'}}>{`Q${this.props.curPos}. ${question[this.props.curPos-1].q}`}</h2>
        <div>
          {question[this.props.curPos-1].options.map((option, idx) => {
            return <div key={idx} className="option">
              <button onClick={() => this.props.nextStep(question[this.props.curPos-1].category, idx==0 ? 1 : -1)} className="option__button">{option}</button>
            </div>
          })}
        </div>
      </div>
    </section>)
  }
}