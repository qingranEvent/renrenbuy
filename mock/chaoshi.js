// 超市列表数据
export const csList = [
  {
    id: 1,
    name: '家家乐超市（西付集乡 1 号店）',
    addr: '大名县西付集乡前街集市口',
    mobile: '15012345678',
    phone: '0310-67893241',
    bglogo: "/images/csBgLogo/market1.png",
    youhui: '满100抽大奖'
  },
  {
    id: 2,
    name: '家家乐超市（西付集乡 2 号店）',
    addr: '大名县西付集乡前街集市口',
    mobile: '15012345678',
    phone: '0310-67893241',
    bglogo: "/images/csBgLogo/market1.png",
    youhui: '满100抽大奖'
  },
  {
    id: 3,
    name: '家家乐超市（西付集乡 3 号店）',
    addr: '大名县西付集乡前街集市口',
    mobile: '15012345678',
    phone: '0310-67893241',
    bglogo: "/images/csBgLogo/market1.png",
    youhui: '满30减5'
  },
  {
    id: 4,
    name: '家家乐超市（西付集乡 4 号店）',
    addr: '大名县西付集乡前街集市口',
    mobile: '15012345678',
    phone: '0310-67893241',
    bglogo: "/images/csBgLogo/market1.png",
    youhui: '全场8.5折'
  },
  {
    id: 5,
    name: '快乐购超市（前鲍庄店）',
    addr: '大名县西付集乡前鲍庄小学向东 50 米',
    mobile: '15012345678',
    phone: '0310-67893241',
    bglogo: "/images/csBgLogo/market1.png",
    youhui: '满100抽大奖'
  },
]
// 超市详情数据
export const csDetail = {
  basicInfo: {
    name: '家家乐超市（西付集 1 号店）',
    src: '/images/csBgLogo/market1.png',
    startTime: '全天 08:00-22:00',
    saleType: '支持在线预定'
  },
  // 商品信息
  goodsInfo: [
    {
      id: 1,
      classType: '新鲜水果',
      goods: [
        {
          name: '苹果',
          img: '/images/shuiguo/pingguo.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '大黄梨',
          img: '/images/shuiguo/huangli.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '甜葡萄',
          img: '/images/shuiguo/putao.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '水蜜桃',
          img: '/images/shuiguo/shuimitao.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '大甜西瓜',
          img: '/images/shuiguo/xigua.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '海南火龙果',
          img: '/images/shuiguo/huolongguo.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        }
      ]
    },
    {
      id: 2,
      classType: '绿色蔬菜',
      goods: [
        {
          name: '扁豆角',
          img: '/images/shucai/biandoujiao.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '菜椒',
          img: '/images/shucai/caijiao.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '尖椒',
          img: '/images/shucai/jianjiao.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '莲藕',
          img: '/images/shucai/lianou.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '芹菜',
          img: '/images/shucai/qincai.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '西葫',
          img: '/images/shucai/xihu.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '圆白菜',
          img: '/images/shucai/yuanbaicai.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        }
      ]
    },
    {
      id: 3,
      classType: '健康鲜肉',
      goods: [
        {
          name: '精品五花肉',
          img: '/images/roulei/wuhua.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '肥瘦肉馅',
          img: '/images/roulei/feishourouxian.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '排骨',
          img: '/images/roulei/paigu.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '三黄鸡',
          img: '/images/roulei/sanhuangji.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '琵琶腿',
          img: '/images/roulei/pipatui.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
      ]
    },
    {
      id: 4,
      classType: '其他品类',
      goods: [
        {
          name: '新鲜鸡蛋',
          img: '/images/qitapinlei/yangjidan.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '柴鸡蛋',
          img: '/images/qitapinlei/chaijidan.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '飘香小米',
          img: '/images/qitapinlei/xiaomi.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        },
        {
          name: '雪花大米',
          img: '/images/qitapinlei/dami.jpg',
          info: '月售 200 斤',
          danjia: '2.5元/斤'
        }
      ]
    }
  ]
}