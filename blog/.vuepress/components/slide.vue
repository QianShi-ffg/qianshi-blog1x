<style lang="stylus">
.abstract-item {
  background: red;
}

.hero-img {
  background: #000;
}

.anchor-down {
  display: block;
  margin: 12rem auto 0;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s infinite;
  position: absolute;
  left: 50%;
  bottom: 25%;
  margin-left: -10px;
  cursor: pointer;
}

@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

@-webkit-keyframes anchorDown {
  0% {
    filter: drop-shadow(0px 1px 0px #fff);
  }

  100% {
    filter: drop-shadow(0px 1px 3px #fff);
  }
}

.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 5px solid rgba(255, 255, 255, 0.9);
  border-top: 5px solid rgba(255, 255, 255, 0.9);
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
  filter: drop-shadow(0px 1px 2px #fff);
}

.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 5px solid rgba(255, 255, 255, 0.9);
  border-top: 5px solid rgba(255, 255, 255, 0.9);
  transform: rotate(135deg);
  filter: drop-shadow(0px 1px 2px #fff);
}
</style>
<template></template>
<script>
export default {
  name: 'slide',
  mounted() {
    const ifJanchor = document.getElementById("JanchorDown");
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
    this.init()
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    },
    init() {
      console.dir(document.querySelector("h1").innerText)
      // For a better performance, use requestAnimationFrame instead of setInterval
      // https://css-tricks.com/snippets/javascript/replacements-setinterval-using-requestanimationframe/
      const requestInterval = (fn, delay) => {
        let start = new Date().getTime();
        let handle = { value: 0 };
        let loop = () => {
          handle.value = requestAnimationFrame(loop);
          let current = new Date().getTime();
          let delta = current - start;
          if (delta >= delay) {
            fn();
            start = new Date().getTime();
          }
        };
        handle.value = requestAnimationFrame(loop);
        return handle;
      };
      const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

      let bubbleSizes = [3, 6, 9, 12];
      let bubbleText
      if(document.querySelector("h1").innerText === '千拾的博客'){
        bubbleText = document.querySelector("h1");
      }
      let bubblePositions = Array.from(
        Array(bubbleText.offsetWidth).keys()
      );
      requestInterval(() => {
        let bubbleSize = sample(bubbleSizes);
        let bubblePosition = sample(bubblePositions);
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = `${bubbleSize}px`;
        bubble.style.left = `${bubblePosition}px`;
        bubbleText.append(bubble);
        let bubbleAnimation = bubble.animate(
          [{ bottom: "10px", opacity: 1 }, { bottom: "180%", opacity: 0.6 }],
          {
            fill: "forwards",
            duration: 3000
          }
        );
        bubbleAnimation.onfinish = () => bubble.remove();
      }, 300);

    }
  }
}
</script>
