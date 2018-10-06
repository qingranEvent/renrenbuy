/**
* @file 首页 model
* @author zongqingran@sensorsdata.cn 
*/
import { routerRedux } from 'dva/router';
import {
  banners,
  recommendData,
} from '../services/index';

export default {
  namespace: 'index',

  state: {
    banners: [], // banners 数据
    reChaoshi: [], // 超市推荐数据
    reShangpin: [], // 商品推荐数据
    reQita: [], // 其他推荐数据
  },

  effects: {
    // 获取 banners
    *getBanners(_, { call, put }) {
      const res = yield call(banners);
      yield put({
        type: 'rdBanners',
        payload: res && res.data,
      });
    },
    *getRecommendData(_, { call, put }) {
      const res = yield [call(recommendData, 'chaoshi'), call(recommendData, 'shangpin')];
      yield put({
        type: 'rdRecommendData',
        payload: res,
      });
    },
    // 打开二级页面
    *openNewPage({ params }, { put }) {
      yield put(
        routerRedux.push({
          pathname: params.url,
          state: {
            ...params
          },
        })
      );
    },
    // 返回
    *goBack(_, { put }) {
      yield put(
        routerRedux.goBack()
      )
    }
  },

  reducers: {
    // 生成 banners 数据
    rdBanners(state, action) {
      const { payload } = action;
      return {
        ...state,
        banners: payload,
      }
    },
    // 生成推荐数据
    rdRecommendData(state, action) {
      const { payload } = action;
      return {
        ...state,
        reChaoshi: payload[0] && payload[0].data || [],
        reShangpin: payload[1] && payload[1].data || [],
      }
    }
  },
};
