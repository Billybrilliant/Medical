import React, { Component } from 'react';
// import './Medicine.css';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
class Medicine extends Component {
  render() {
    return <div>medicine</div>;
  }
}
export default CSSModules(Medicine, styles);
