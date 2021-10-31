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

