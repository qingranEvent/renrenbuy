/**
* @file 超市相关 model
* @author zongqingran@sensorsdata.cn 
*/
import { routerRedux } from 'dva/router';
import {
  csList,
  csDetail,
} from '../services/chaoshi';

export default {
  namespace: 'chaoshi',

  state: {
    csList: [], // 超市列表
    csDetail: { // 超市详情
      basicInfo: {

      },
      goodsInfo: []
    }, 
  },

  effects: {
    // 获取超市列表数据
    *getCSList(_, { call, put }) {
      const res = yield call(csList);
      yield put({
        type: 'rdCSList',
        payload: res && res.data,
      });
    },
    // 进入某一个超市查看详情
    *entryOneChaoshi({ payload }, { call, put }) {
      yield put(
        routerRedux.push({
          pathname: 'chaoshi',
          state: {
            ...payload
          },
        })
      );
    },
    // 获取超市详情
    *getCSDetail({ csId }, { call, put }) {
      const res = yield call(csDetail, csId);
      yield put({
        type: 'rdCSDetail',
        payload: res && res.data,
      });
    },
  },

  reducers: {
    // 生成超市列表数据
    rdCSList(state, action) {
      const { payload } = action;
      return {
        ...state,
        csList: payload || []
      }
    },
    // 生成超市详情数据
    rdCSDetail(state, action) {
      const { payload } = action;
      return {
        ...state,
        csDetail: payload || {}
      }
    },
  },
};
