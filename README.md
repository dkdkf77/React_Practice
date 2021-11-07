# React_Practice

"리액트를 다루는 방법" 책을 보면서 공부를 해보자

<hr>

### 리액트 프로잭트 시작

#### - yarn create react-app 파일이름

#### - res 를 치면 자동으로 컴포넌트 코드가 입력된다.

<hr/>

### ReactDom.render가 무엇 인가?

     - 컴포넌트 페이지에 랜더링 하는 역할을 한다.
     - 함수의 첫 번째 파라미터에는 페이지에 렌더링할 내용을 jsx 형태로 작성
     - 두 번째 파라미터에는 해당 jsx를 렌더링 할 document 내부 요소를 설정

<hr/>

### React.StrictMode는 무엇?

- 리액트의 레거시 기능들을 사용하지 못하게 하는 기능
- 이를 사용하면 나중에 완전히 사라지게 될 옛날 기능을 사용했을 때 경고를 출력

<hr/>

### 컴포넌트에 여러 요소가 있다면?

- 반드시 부모 요소 하나로 감싸야 한다.
- 꼭 div를 사용하지 않아도 Fragment, <>를 사용해도 가능하다.

<hr/>

### const 와 let ?

- const는 한번 지정하고 나면 변경이 불가능한 상수를 선언
- let은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드

<hr/>

### 인스턴스?, 객체?, 클래스?

- 인스턴스? = 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
- 객체? = 소프트웨어에 구현할 대상
- 클래스? =객체를 만들어 내기 위한 설계도 혹은 틀
- 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

### children? 몰랐던 지식

- 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props

### Class 형 컴포넌트에서 defaultProps와 propTypes를 설정 할 때

    	- static을 사용하여 랜더 윗쪽 부분에 설정 해 준다.

<hr/>

### state

    	- prps는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정되는 값
    	- 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
    	- props를 바꾸려면 부모 컴포넌트를 바꿔줘야 한다 지금 react에서는 App 컴포넌트에서 props를 바꿔줘야 변경된다.
    	- state에는 2가지가 있는데 class형에서 사용하는 state 그리고 함수형에서 사용하는 useState가 있다.

### setState ?

    	- state 값을 바꿀 수 있게 해주는 함수
    	- Counter.js 에 setState를 사용
![Hnet com-image (5)](https://user-images.githubusercontent.com/88579497/140636400-ef0c4a12-994a-4af6-a3d5-e2b7742493f8.gif)

    	

### 화살표 함수에서 값을 바로 반환하고 싶다면 코드 블록 {}를 생략 하면 된다.

    	- 화살표 함수에 객체를 바로 반환 하는 방법과 바로 반환하지 않는 방법
    	- 위와 아래는 똑같은 기능을 한다
<img width="896" alt="스크린샷 2021-11-07 오후 4 09 02" src="https://user-images.githubusercontent.com/88579497/140636415-11bf944c-3c5b-42e9-927e-b447b1d3968b.png">

    

### this.setState가 끝난 후 특정 작업 실행하기

    	- 특정 작업을 하고 싶을 때는 setState으 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있다.
  <img width="892" alt="스크린샷 2021-11-07 오후 4 19 03" src="https://user-images.githubusercontent.com/88579497/140636424-cbfc8891-d453-4578-adaa-b6210510999d.png">

![Hnet com-image (7)](https://user-images.githubusercontent.com/88579497/140636438-f795306f-77d0-474c-a9b9-3dc6e50aa25f.gif)





