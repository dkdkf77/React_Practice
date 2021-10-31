import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    //super = props에서 상속 받아 온다는 뜻으로 배움
    super(props);
    //state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState 를 사용하여 state에 새로운 값을 넣음.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
