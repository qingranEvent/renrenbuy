/**
 * @file 首页
 * @author zongqingran@sensorsdata.cn
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Carousel, Card, Grid } from 'antd-mobile';
import BottomTabBars from 'layouts/BottomTabBars';
import { globalConf } from 'confs/globalConf';
import styles from './IndexPage.less';

const { indexClass } = globalConf;
@connect(({ index,loading }) => ({
  index,
  bannersLoading: loading.effects['index/getBanners'],
}))
export default class IndexPage extends PureComponent {
  state = {
    imgHeight: 176,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'index/getBanners',
    });
    dispatch({
      type: 'index/getRecommendData'
    });
  }
  // 点击某一个分类
  /**
   * 点击某一个分类
   * @param {Object} ele 被点击的这个分类的数据
   * @param {Number} index 点击的分类的 index
   */
  handleClickOneClass(ele, index) {
    this.props.dispatch({
      type: 'index/openNewPage',
      params: ele
    });
  }

  render() {
    const { banners, reChaoshi, reShangpin } = this.props.index;
    return (
      <BottomTabBars
        selectedTab="index"
      >
        {/* banners */}
        <Card>
          {
            banners.length &&
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {banners.map(item => (
                <a
                  key={item.id}
                  href={item.url}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={item.display}
                    alt={item.name}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          }
        </Card>
        
        {/* 主要分类 */}
        <Card>
          <Grid 
            data={indexClass} 
            activeStyle={false} 
            hasLine={false} 
            onClick={this.handleClickOneClass.bind(this)}
          />
        </Card>
        {/* 超市推荐 */}
        <Card className={styles.cardItem}>
          <Grid 
            data={reChaoshi} 
            activeStyle={false} 
            // hasLine={false} 
            columnNum={2}
            renderItem={item => {
              return (
                <div className={styles.recommendItem}>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.youhuiInfo}</p>
                    <p>{item.remark}</p>
                  </div>
                  <img src={item.display} alt={item.name} width={72} height={72} />
                </div>
              )
            }}
            onClick={this.handleClickOneClass.bind(this)}
          />
        </Card>
        {/* 商品推荐 */}
        <Card className={styles.cardItem}>
          <Grid 
            className={styles.shangpinGrid}
            data={reShangpin} 
            activeStyle={false} 
            columnNum={2}
            renderItem={item => {
              return (
                <div className={styles.recommendItem}>
                  <div>
                    <p>{item.name}</p>
                    <p className={styles.lineThrough}>{`原价：${item.yuanjia}`}</p>
                    <p className={styles.redColor}>{`现价：${item.xianjia}`}</p>
                  </div>
                  <img src={item.display} alt={item.name} width={72} height={72} />
                </div>
              )
            }}
            onClick={this.handleClickOneClass.bind(this)}
          />
        </Card>
      </BottomTabBars>
    );
  }
}