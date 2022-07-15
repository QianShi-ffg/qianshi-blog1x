module.exports = {
  "title": "千拾",
  "description": "千拾的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/avatar.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "theme": "reco",
  "themeConfig": {
    "subSidebar": "auto",
    "valineConfig": {
      "appId": 'l4H1063vSwLwq3etA1TJPlGk-gzGzoHsz',// your appId
      "appKey": 'r76XnYuIgIywb4SKnYdasF3w', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "杂文",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/QianShi-ffg",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      {
        "title": "小白龙",
        "logo": "https://xiaolong-oss-cdn.oss-cn-guangzhou.aliyuncs.com/myblog/images/logo.jpg",
        "link": "https://blog.xiaolong0418.com/"
      },
      {
        "title": "一步一个脚印",
        "desc": "一步一个脚印抵达成功的彼岸！",
        "logo": "https://www.stepbystep.cf/img/avatar_hu46bc9b9ee9b6ad90c62ec6260983f5e7_5496_300x0_resize_q75_h2_box_2.webp",
        "link": "https://www.stepbystep.cf/"
      },
      {
        "title": "milk",
        // "desc": "一步一个脚印抵达成功的彼岸！",
        "logo": "	http://www.milkcxb.cn/avatar.jpeg",
        "link": "http://www.milkcxb.cn/"
      }
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "千拾",
    "authorAvatar": "/avatar.jpg",
    "record": "晋ICP备18013488号-1",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.55,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ]
}