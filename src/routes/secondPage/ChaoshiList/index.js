/**
* @file 超市列表二级页面
* @author zongqingran@sensorsdata.cn 
*/
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button } from 'antd-mobile';
import NavBarCon from 'layouts/NavBarCon';
import styles from './index.less';

@connect(({ chaoshi }) => ({
  chaoshi,
}))
export default class ChaoshiList extends PureComponent {
  state = {
    imgHeight: 176,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chaoshi/getCSList',
    });
  }
  /**
   * 点击进入某一个超市
   */
  entryOneChaoshi(chaoshiInfo) {
    this.props.dispatch({
      type: 'chaoshi/entryOneChaoshi',
      payload: chaoshiInfo
    });
  }

  render() {
    const { csList } = this.props.chaoshi;
    return (
      <Card>
        <NavBarCon title="商超列表"></NavBarCon>
        {/* 超市列表 */}
        <Card className="second-page">
          {
            csList.map(item => {
              return(
                <div key={item.id} className={styles.chaoshiItem}>
                  <div className={styles.listHead}> 
                    <img src={item.bglogo} className={styles.marketLogo} alt="" />
                    <div className={styles.basicInfo}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.youhui}>{item.youhui}</p>
                    </div>
                  </div>

                  <div className={styles.listFoot}>
                    <p>地址：{item.addr}</p>
                    <p>电话：{item.mobile}</p>
                  </div>
                  <Button className={styles.enterBtn} onClick={this.entryOneChaoshi.bind(this, item)}>进去逛逛</Button>
                </div>
              )
            })
          }
        </Card>
      </Card>
    );
  }
}