Page({
  data: {
    classID: '',
    scrollHeight: 0,
    loadShow: false,
    loadMore: true,
    homeList: [
      {
          caseID: 'alipay_1',
          title: "男子利用支付宝“借呗”敛财 3个月诈骗2万余元",
          content: "法制网讯 记者丁国锋 通讯员顾银姝 郭筱琦 当今社会生活节奏快，不...",
          classification: "支付宝诈骗",
          date: "2017-10-10"
      },
      {
          caseID: 'weixin_1',
          title: "小伙微信约“附近”美女被骗8千元 骗子在千里外",
          content: "小伙晚上闲得无聊，通过微信查找附近的人，找了个“近在眼前”的美女，...",
          classification: "微信诈骗",
          date: "2017-03-15"
      },
      {
          caseID: 'weixin_2',
          title: "利用手机微信诈骗屡屡得手",
          content: "法制网记者 赵红旗 法制网通讯员 杨委峰 陈金华 \n 4月6日，河南省商丘市虞城县人民法院通报...",
          classification: "微信诈骗",
          date: "2017-04-06"
      },
      {
          caseID: 'mobilebank_1',
          title: "男子利用银行交易手机短信实施诈骗 故意输错账号骗多人",
          content: "法制网讯 记者 潘从武 通讯员 张磊 “××于×月×日×时向尾号为****的账户发起汇款****元……”当你收...",
          classification: "手机银行诈骗",
          date: "2016-01-04"
      },
      {
          caseID: 'internet_1',
          title: "世纪佳缘交友冒充香港金融人士以投资项目名义诈骗汇款",
          content: "感谢【nini】的投递：\n 本人最近在世纪佳缘被重庆籍香港金融男诈骗60几万的荒唐...",
          classification: "网络诈骗",
          date: "2017-10-12"
      },
      {
          caseID: 'onlineshop_1',
          title: "“双十一”临近警方发布典型案例 快乐网购更要警惕网购诈骗",
          content: "法制网记者 潘从武 \n 法制网通讯员 姬令桐",
          classification: "网购诈骗",
          date: "2017-11-08"
      },
      {
          caseID: 'onlineshop_2',
          title: "“网购骗局”升级版套路深 不要账号密码骗走一万七",
          content: " 法制网讯 记者丁国锋 通讯员苏宫新 网上购物后，江苏启东的印女士接...",
          classification: "网购诈骗",
          date: "2017-10-10"
      },
      {
          caseID: 'society_1',
          title: "内蒙古弘山文化艺术品交易中心非法邮币卡交易诈骗投资者巨额钱财",
          content: "感谢【何喜鹏】的投递：\n 内蒙古弘山文化艺术品交易中心与其会员单位23010号段墨...",
          classification: "社会诈骗",
          date: "2017-07-08"
      },
      {
          caseID: 'telecom_1',
          title: "亲身经历的网络兼职照片和电话邮局包裹骗局",
          content: "感谢【LILY】的投递： \n 第一次是在今天春天，闲的没事想在网上找个兼职，加了一个...",
          classification: "电信诈骗",
          date: "2017-09-29"
      },
      {
          caseID: 'business_1',
          title: "山东惠成联合商品交易中心现货投资非法交易诈骗投资人",
          content: "感谢【李强】的投递：\n 山东惠成联合商品交易市场，你从人间消失了吗？（经查：山东惠...",
          classification: "商业诈骗",
          date: "2017-06-29"
      },
      {
          caseID: 'business_2',
          title: "投诉新财富网购商城虚假宣传诱骗加盟费强行关闭店铺",
          content: "感谢【范锦国】的投递：\n 2014年初，我在创业商机网上找项目时，曾在多个招商项目...",
          classification: "商业诈骗",
          date: "2017-03-14"
      },
      {
          caseID: 'business_3',
          title: "安徽极客速运有限公司无快递经营许可证涉嫌加盟诈骗",
          content: "感谢【487821708】的投递：\n 本文尽量站在第三人角度述说所有的事情经过，也...",
          classification: "商业诈骗",
          date: "2017-08-14"
      }
    ]
  },
  lower: function() {
    if(this.data.loadMore) {
      this.setData({
        loadMore: false,
        loadShow: true
      })
      setTimeout(() => {
        let tempList = this.data.homeList
        tempList.push({
          caseID: "telecom_3",
          title: "亲身经历的网络兼职照片和电话邮局包裹骗局",
          content: "感谢【LILY】的投递： \n 第一次是在今天春天，闲的没事想在网上找个兼职，加了一个...",
          classification: "电信诈骗",
          date: "2017-09-29"
        })
        this.setData({
          homeList: tempList,
          loadMore: true,
          loadShow: false
        })
      }, 2000)
    }
  },
  handleNavi: function(e) {
    console.log(e.target.id)
    //点击事件的目标id 根据id设置路由跳转
    wx.navigateTo({
        url: `../article/article?id=${e.target.id}`
    })
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          scrollHeight: res.windowHeight
        })
      }
    });
    this.setData({
      classID: options.id
    })
  }
})