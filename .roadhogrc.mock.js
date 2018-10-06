import mockjs from 'mockjs';
import { format, delay } from 'roadhog-api-doc';
import { 
  banners,
  chaoshiRecommend,
  shangpinRecommend,
} from './mock/index';
import {
  csList,
  csDetail
} from './mock/chaoshi';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // banners
  'GET /api/banners/get': banners,
  // 推荐信息
  'GET /api/recommend/get': (req, res) => {
    const params = req.query;
    const { recommend_type } = params;
    if(recommend_type === 'chaoshi') {
      res.status(200).send(chaoshiRecommend);
    } else if(recommend_type === 'shangpin') {
      res.status(200).send(shangpinRecommend);
    }
  },
  // 超市列表
  'GET /api/chaoshi/list': (req, res) => {
    const params = req.query;
    const { area_code } = params;
    if(!area_code) {
      res.status(200).send(csList);
    }
  },
  // 超市详情
  'GET /api/chaoshi': (req, res) => {
    const params = req.query;
    const { cs_id } = params;
    res.status(200).send(csDetail);
  }
};

export default (noProxy ? {} : delay(proxy, 1000));
