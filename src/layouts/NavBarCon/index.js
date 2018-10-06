/**
* @file 带有导航栏的二级页面容器
* @author zongqingran@sensorsdata.cn 
*/
import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';
import styles from './index.less';

@connect(({ index,loading }) => ({
  index,
}))
export default class NavBarCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onBack() {
    this.props.dispatch({
      type: 'index/goBack'
    });
  }

  render() {
    return (
      <div className={styles.navBarCon}>
        <NavBar
          mode="dark"
          leftContent="返回"
          onLeftClick={this.onBack.bind(this)}
        >{this.props.title}</NavBar>
      </div>
    );
  }
}