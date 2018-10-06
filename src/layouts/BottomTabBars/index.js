/**
* @file tabBars container, tabBars 页面的父容器
* @author zongqingran@sensorsdata.cn 
*/
import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import {globalConf} from 'confs/globalConf';
import styles from './index.less';

const { tabBars } = globalConf;
@connect(({ index }) => ({
  index,
}))
export default class BottomTabBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: false,
      selectedTab: this.props.selectedTab,
    };
  }

  changePage(url) {
    this.props.dispatch({
      type: 'index/openNewPage',
      params: {
        url,
      }
    });
  }

  render() {
    return (
      <div className={styles.tabBarsCon}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            tabBars.map(item => {
              return(
                <TabBar.Item
                  key={item.key}
                  title={item.title}
                  selected={item.key === this.state.selectedTab}
                  icon={
                    <Icon type={item.icon} />
                  }
                  selectedIcon={
                    <Icon type={item.icon} />
                  }
                  onPress={this.changePage.bind(this, item.key)}
                >
                  {this.props.children}
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}