const initTheme = () => {
  let currentClassName = 'light'
  // let document
  // if (typeof window !== 'undefined') {
  //   document = window.document
  // } else {
  //   const jsdom = require("jsdom")
  //   const JSDOM = jsdom.JSDOM
  //   document = new JSDOM(response.data).window.document
  // }
  if (document.getElementsByClassName('themeDom')[0]) {
    return
  }
  console.log(window)
  const root = document.querySelector(":root")
  let dom = document.getElementsByTagName('html')[0]
  const themeDom = document.createElement('div')
  themeDom.classList.add('themeDom')
  const img = document.createElement('img')
  img.src = require('./public/light.svg')
  themeDom.append(img);
  const style = 'position: absolute;top: 3px;left: -20px;width: 28px;'
  img.style = style
  document.getElementsByClassName('color-picker')[0].append(themeDom);
  const init = () => {
    const lightObj = {
      '--default-color-10': 'rgba(255, 255, 255, 1)',
      '--default-color-9': 'rgba(255, 255, 255, 0.9)',
      '--default-color-8': 'rgba(255, 255, 255, 0.8)',
      '--default-color-7': 'rgba(255, 255, 255, 0.7)',
      '--default-color-6': 'rgba(255, 255, 255, 0.6)',
      '--default-color-5': 'rgba(255, 255, 255, 0.5)',
      '--default-color-4': 'rgba(255, 255, 255, 0.4)',
      '--default-color-3': 'rgba(255, 255, 255, 0.3)',
      '--default-color-2': 'rgba(255, 255, 255, 0.2)',
      '--default-color-1': 'rgba(255, 255, 255, 0.1)',
      '--background-color': '#fff',
      '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
      '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
      '--text-color': '#242424',
      '--text-color-sub': '#7F7F7F',
      '--border-color': '#eaecef',
      '--code-color': 'rgba(27, 31, 35, 0.05)',
      '--mask-color': '#888'
    }
    const darkObj = {
      '--default-color-10': 'rgba(0, 0, 0, 1)',
      '--default-color-9': 'rgba(0, 0, 0, 0.9)',
      '--default-color-8': 'rgba(0, 0, 0, 0.8)',
      '--default-color-7': 'rgba(0, 0, 0, 0.7)',
      '--default-color-6': 'rgba(0, 0, 0, 0.6)',
      '--default-color-5': 'rgba(0, 0, 0, 0.5)',
      '--default-color-4': 'rgba(0, 0, 0, 0.4)',
      '--default-color-3': 'rgba(0, 0, 0, 0.3)',
      '--default-color-2': 'rgba(0, 0, 0, 0.2)',
      '--default-color-1': 'rgba(0, 0, 0, 0.1)',
      '--background-color': '#181818',
      '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.7)',
      '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.8)',
      '--text-color': 'rgba(255, 255, 255, 0.8)',
      '--text-color-sub': '#8B8B8B',
      '--border-color': 'rgba(0, 0, 0, 0.3)',
      '--code-color': 'rgba(0, 0, 0, 0.3)',
      '--mask-color': '#000'
    }
  
    if (currentClassName === 'dark') {
      dom.classList.replace('light', 'dark')
      for (const i in darkObj) {
        root.style.setProperty(i, darkObj[i]);
      }
    } else {
      dom.classList.replace('dark', 'light')
      for (const i in darkObj) {
        root.style.setProperty(i, lightObj[i]);
      }
    }
    dom = document.getElementsByTagName('html')[0]
    sessionStorage.setItem('theme', currentClassName)
  }
  img.onclick = () => {
    if (currentClassName === 'light') {

      currentClassName = 'dark'
      img.src = require('./public/dark.svg')
    } else {
      currentClassName = 'light'
      img.src = require('./public/light.svg')
    }
    init()
    themeColor(currentClassName)
  }
  const themeColor = (value) => {
    if (sessionStorage.getItem('themeColor')) {
      if(value === 'light') {
        root.style.setProperty("--theme-color", `hsl(${sessionStorage.getItem('themeColor')})`);
      } else {
        let themeColorList = sessionStorage.getItem('themeColor').split(',')
        themeColorList[2] = '70%'
        root.style.setProperty("--theme-color", `hsl(${themeColorList.join(',')})`);
      }
    } else {
      if(value === 'light') {
        root.style.setProperty("--theme-color", `hsl(200, 26%, 55%)`);
      } else {
        root.style.setProperty("--theme-color", `hsl(200, 26%, 70%)`);
      }
    }
  }
  if (sessionStorage.getItem('theme')) {
    currentClassName = sessionStorage.getItem('theme')
    if (currentClassName === 'light') {
      img.src = require('./public/light.svg')
    } else {
      img.src = require('./public/dark.svg')
    }
  } else {
    currentClassName = 'light'
    img.src = require('./public/light.svg')
  }
  init()
  themeColor(currentClassName)
}

export default ({
  Vue,
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  const vue = new Vue()
  router.afterEach((to, from) => {
    // 解决document is not defined
    Vue.mixin({
      mounted(){
        setTimeout(()=>{
          initTheme()
        },200)
      }
    })
  })
};
