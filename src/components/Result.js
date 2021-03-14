import React from 'react'
import { result } from '../utils/result'
import '../styles/Result.scss'

export default class Result extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: "",
      poster: "",
      intro: ""
    }
  }
  componentDidMount(){
    if(this.props.genre == 1){
      if(this.props.nation > 0){
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[0].title,
              poster: result[0].poster,
              intro: result[0].intro
            })
          }else{
            this.setState({
              title: result[1].title,
              poster: result[1].poster,
              intro: result[1].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[2].title,
              poster: result[2].poster,
              intro: result[2].intro
            })
          }else{
            this.setState({
              title: result[3].title,
              poster: result[3].poster,
              intro: result[3].intro
            })
          }
        }
      }else{
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[4].title,
              poster: result[4].poster,
              intro: result[4].intro
            })
          }else{
            this.setState({
              title: result[5].title,
              poster: result[5].poster,
              intro: result[5].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[6].title,
              poster: result[6].poster,
              intro: result[6].intro
            })
          }else{
            this.setState({
              title: result[7].title,
              poster: result[7].poster,
              intro: result[7].intro
            })
          }
        }
      }
    }else if(this.props.genre == 2){
      if(this.props.nation > 0){
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[8].title,
              poster: result[8].poster,
              intro: result[8].intro
            })
          }else{
            this.setState({
              title: result[9].title,
              poster: result[9].poster,
              intro: result[9].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[10].title,
              poster: result[10].poster,
              intro: result[10].intro
            })
          }else{
            this.setState({
              title: result[11].title,
              poster: result[11].poster,
              intro: result[11].intro
            })
          }
        }
      }else{
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[12].title,
              poster: result[12].poster,
              intro: result[12].intro
            })
          }else{
            this.setState({
              title: result[13].title,
              poster: result[13].poster,
              intro: result[13].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[14].title,
              poster: result[14].poster,
              intro: result[14].intro
            })
          }else{
            this.setState({
              title: result[15].title,
              poster: result[15].poster,
              intro: result[15].intro
            })
          }
        }
      }
    }else if(this.props.genre == 3){
      if(this.props.nation > 0){
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[16].title,
              poster: result[16].poster,
              intro: result[16].intro
            })
          }else{
            this.setState({
              title: result[17].title,
              poster: result[17].poster,
              intro: result[17].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[18].title,
              poster: result[18].poster,
              intro: result[18].intro
            })
          }else{
            this.setState({
              title: result[19].title,
              poster: result[19].poster,
              intro: result[19].intro
            })
          }
        }
      }else{
        if(this.props.time > 0){
          if(this.props.detail > 0){
            this.setState({
              title: result[20].title,
              poster: result[20].poster,
              intro: result[20].intro
            })
          }else{
            this.setState({
              title: result[21].title,
              poster: result[21].poster,
              intro: result[21].intro
            })
          }
        }else{
          if(this.props.detail > 0){
            this.setState({
              title: result[22].title,
              poster: result[22].poster,
              intro: result[22].intro
            })
          }else{
            this.setState({
              title: result[23].title,
              poster: result[23].poster,
              intro: result[23].intro
            })
          }
        }
      }
    }
  }

  render(){
    console.log(this.props)
    return (<div className="container">
      <img className="poster" src={this.state.poster} />
      <h1 className="title">{this.state.title}</h1>
      <p className="intro">{this.state.intro}</p>
      <button className="reBtn" onClick={this.props.resetTest}>다시하기</button>
    </div>
    )
  }
}