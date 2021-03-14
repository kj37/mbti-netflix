import React from 'react'
import '../styles/Main.scss'

export default class Main extends React.Component{
    render(){
        return (<div>
            <h1>넷플릭스 영화 추천</h1>
            <div className="field">
              <p>오늘 보고 싶은 건?</p>
              <ul>
                <li><a onClick={() => this.props.handleBegin(1)}>희로애락 가득한 영화</a></li>
                <li><a onClick={() => this.props.handleBegin(2)}>나를 꿈꾸게 하는 영화</a></li>
                <li><a onClick={() => this.props.handleBegin(3)}>긴장감 넘치는 영화</a></li>
              </ul>
            </div>
            <p className="maker">MADE BY LAZY CODER</p>
        </div>)
    }
}