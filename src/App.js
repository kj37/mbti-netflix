import React from 'react'
import Main from './components/Main'
import Result from './components/Result'
import Question from './components/Question'
import './App.scss';

const NUM_OF_QUESTION = 9

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      curPos: 0,
      genre: 0,
      nation: 0,
      time: 0,
      detail: 0,
    }
  }

  handleBegin = (genre) => {
    this.setState({
      curPos: 1,
      genre: genre
    })
    console.log(this.state.genre)
  }

  nextStep = (category, point) => {

    if(category == "nation"){
      this.setState({
        curPos: this.state.curPos + 1,
        nation : this.state.nation + point
      })
    }else if(category == "time"){
      this.setState({
        curPos: this.state.curPos + 1,
        time : this.state.time + point
      })
    }else if(category == "detail"){
      this.setState({
        curPos: this.state.curPos + 1,
        detail : this.state.detail + point
      })
    }

  }

  resetTest = () => {
    this.setState({
      curPos: 0,
    })
  }


  render(){
    const { curPos } = this.state;
    return (<div className="app">
      {
        curPos === 0 ? 
        <Main handleBegin={this.handleBegin}/> : 
        curPos > NUM_OF_QUESTION ? 
        <Result resetTest={this.resetTest} {...this.state}/> :
        <Question nextStep={this.nextStep} curPos={this.state.curPos} genre={this.state.genre} />
      }
    </div>)
  }
}

export default App;