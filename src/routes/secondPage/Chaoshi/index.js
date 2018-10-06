/**
* @file 超市详情页二级页面
* @author zongqingran@sensorsdata.cn 
*/
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd-mobile';
import NavBarCon from 'layouts/NavBarCon';
import styles from './index.less';

@connect(({ chaoshi }) => ({
  chaoshi,
}))
export default class ChaoshiList extends PureComponent {
  state = {
    classTypeIndex: 0
  };
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({
      type: 'chaoshi/getCSDetail',
      csId: location.state && location.state.id
    });
  }

  render() {
    const { csDetail } = this.props.chaoshi;
    const { classTypeIndex } = this.state;
    const { basicInfo, goodsInfo } = csDetail;
    return (
      <Card>
        <NavBarCon title="商超列表"></NavBarCon>
        {/* 超市列表 */}
        <Card className="second-page">
          <div className={styles.detail}>
          {/* 顶部超市信息及功能 */}
            <div className={styles.basicInfo}>
              <img src={basicInfo.src} className={styles.marketLogo} alt="" />
              <div className={styles.info}>
                <p className={styles.name}>{basicInfo.name}</p>
                <p className={styles.startTime}>{basicInfo.startTime}</p>
                <p className={styles.saleType}>{basicInfo.saleType}</p>
              </div>
            </div>
            {/* 具体商品信息 */}
            <div className={styles.goodsInfo}>
              {/* 左侧分类 */}
              <div className={styles.classList}>
                {
                  goodsInfo.map((item, index) => {
                    return(
                      <div className={styles.classItem} key={item.id} onClick={() => this.setState({classTypeIndex: index})}>
                        <p className={classTypeIndex === index ? styles.active : ''}>{item.classType}</p>
                      </div>
                    )
                  })
                }
              </div>
              {/* 右侧商品列表 */}
              <div className={styles.goodsList}>
                {
                  goodsInfo[classTypeIndex] && goodsInfo[classTypeIndex].goods.map(ele => {
                    return(
                      <div className={styles.oneGood} key={ele.name}>
                        <img src={ele.img} className={styles.goodImg} alt="" />
                        <div className={styles.info}>
                          <p className={styles.name}>{ele.name}</p>
                          <p className={styles.extraInfo}>{ele.info}</p>
                          <p className={styles.danjia}>{ele.danjia}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Card>
      </Card>
    );
  }
}