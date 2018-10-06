/**
* @file 首页 api
* @author zongqingran@sensorsdata.cn 
*/
import request from '../utils/request';

// 本周客户列表详情
export async function banners() {
  return request('/api/banners/get');
};
// 首页推荐数据（超市推荐，商品推荐，其他类型广告推荐）
/**
 * 首页推荐数据（超市推荐，商品推荐，其他类型广告推荐）
 * @type {String} recommendType 推荐类型 chaoshi | shangpin | qita
 */
export async function recommendData(recommendType) {
  return request(`/api/recommend/get?recommend_type=${recommendType}`);
};