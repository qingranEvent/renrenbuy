/**
 * @file 首页
 * @author zongqingran@sensorsdata.cn
 */
import React, { PureComponent } from 'react';
import { Card } from 'antd-mobile';
import BottomTabBars from 'layouts/BottomTabBars';
import styles from './ContactUs.less';

export default class ContactUs extends PureComponent {
  state = {
    phone: '15030402798',
    weChat: '15030402798',
    mail: '15030402798@qq.com',
    addr: '河北大名县西付集乡工业区'
  };

  render() {
    const { phone, weChat, mail, addr } = this.state;
    return (
      <BottomTabBars
        selectedTab="contactUs"
      >
        <Card className={styles.ContactUs}>
          <h2>关于我们</h2>
          <p>
              人人buy隶属于人人buy（邯郸）信息科技有限公司，专注于三四线城市的百姓身边购物、企业品牌推广的信息服务平台。
          </p>
        </Card>
        <Card className={styles.ContactUs}>
          <h2>推广合作</h2>
          <div>
            <p>
              <span>电话：</span>
              <span>{phone}</span>
            </p>
            <p>
              <span>微信：</span>
              <span>{weChat}</span>
            </p>
            <p>
              <span>邮箱：</span>
              <span>{mail}</span>
            </p>
            <p>
              <span>地址：</span>
              <span>{addr}</span>
            </p>
          </div>
        </Card>
      </BottomTabBars>
    );
  }
}