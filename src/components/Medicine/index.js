import React, { Component } from 'react';
// import './Medicine.css';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
class Medicine extends Component {
  render() {
    return (
      <div styleName="table">
        <div styleName="row">
          <div styleName="cell">A0</div>
          <div styleName="cell">B0</div>
        </div>
      </div>
    );
  }
}
export default CSSModules(Medicine, styles);
