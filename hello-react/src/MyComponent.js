import React, { children, Component } from 'react';
import PropTypes from 'prop-types';

// defaultProps로 초기 props 값을 설정 해줄 수 있고 ({name, favoriteNumber, children}) 으로 props 값을 사용 가능하게 해준다.

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '류승환',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
