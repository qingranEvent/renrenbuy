/**
* @file 超市相关 api
* @author zongqingran@sensorsdata.cn 
*/
import request from '../utils/request';

// 根据用户所在地区 code（省_县_乡） 值，获取超市列表
export async function csList(areaCode = '') {
  return request(`/api/chaoshi/list?area_code=${areaCode}`);
};
// 根据超市id查询超市详细信息
export async function csDetail(csId = '') {
  return request(`/api/chaoshi?cs_id=${csId}`);
};