<template>
  <div id="randomQuote">
    <div class="loading-bar"></div>
    <div class="quote-box">
      <blockquote class="quote-text">
        <div class="hitokoto">
          <svg
            t="1583933441119"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10007"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path
              d="M475.428571 548.571429l0 219.428571q0 45.714286-32.036571 77.677714t-77.677714 32.036571l-219.428571 0q-45.714286 0-77.677714-32.036571t-32.036571-77.677714l0-402.285714q0-59.465143 23.113143-113.444571t62.537143-93.403429 93.403429-62.537143 113.444571-23.113143l36.571429 0q14.848 0 25.746286 10.825143t10.825143 25.746286l0 73.142857q0 14.848-10.825143 25.746286t-25.746286 10.825143l-36.571429 0q-60.562286 0-103.424 42.861714t-42.861714 103.424l0 18.285714q0 22.820571 16.018286 38.838857t38.838857 16.018286l128 0q45.714286 0 77.677714 32.036571t32.036571 77.677714zM987.428571 548.571429l0 219.428571q0 45.714286-32.036571 77.677714t-77.677714 32.036571l-219.428571 0q-45.714286 0-77.677714-32.036571t-32.036571-77.677714l0-402.285714q0-59.465143 23.113143-113.444571t62.537143-93.403429 93.403429-62.537143 113.444571-23.113143l36.571429 0q14.848 0 25.746286 10.825143t10.825143 25.746286l0 73.142857q0 14.848-10.825143 25.746286t-25.746286 10.825143l-36.571429 0q-60.562286 0-103.424 42.861714t-42.861714 103.424l0 18.285714q0 22.820571 16.018286 38.838857t38.838857 16.018286l128 0q45.714286 0 77.677714 32.036571t32.036571 77.677714z"
              p-id="10008"
            ></path>
          </svg>
          <span class="hitokoto-text"></span>
        </div>
        <div class="from">
          -&nbsp;
          <cite class="from-text"></cite>
        </div>
      </blockquote>
      <div class="quote-actions">
        <button class="btn-share">
          <span class="btn-text">分享</span>
          <span class="btn-icon">
            <svg
              t="1580465783605"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9773"
              width="16"
              height="16"
            >
              <path
                d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                p-id="9774"
                fill="#ffffff"
              ></path>
            </svg>
          </span>
          <ul class="social-icons">
            <!-- <li>
              <a class="twitter" href="#" target="_blank"
                ><svg
                  t="1580195676506"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2099"
                  width="16"
                  height="16"
                >
                  <path
                    d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                    p-id="2100"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="tumblr" href="#" target="_blank"
                ><svg
                  t="1583935452305"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9959"
                  width="16"
                  height="16"
                >
                  <path
                    d="M758.857143 759.442286l45.714286 135.460571q-13.165714 19.968-63.414857 37.741714t-101.156571 18.285714q-59.465143 1.170286-108.836571-14.848t-81.408-42.276571-54.272-60.562286-31.744-68.534857-9.435429-67.437714l0-310.857143-96.036571 0 0-122.88q41.179429-14.848 73.728-39.716571t52.004571-51.419429 33.133714-58.294857 19.456-56.539429 8.557714-50.541714q0.585143-2.852571 2.56-4.827429t4.315429-1.974857l139.410286 0 0 242.322286 190.317714 0 0 144.018286-190.829714 0 0 296.009143q0 17.115429 3.730286 32.036571t12.873143 29.988571 28.306286 23.698286 46.592 7.972571q44.544-1.170286 76.580571-16.603429z"
                    p-id="9960"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="facebook" href="#" target="_blank"
                ><svg
                  t="1583935416948"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9773"
                  width="16"
                  height="16"
                >
                  <path
                    d="M767.414857 6.875429l0 150.820571-89.746286 0q-49.152 0-66.267429 20.553143t-17.115429 61.732571l0 108.032 167.424 0-22.308571 169.179429-145.115429 0 0 433.737143-174.884571 0 0-433.737143-145.700571 0 0-169.179429 145.700571 0 0-124.562286q0-106.276571 59.465143-164.864t158.281143-58.587429q83.968 0 130.267429 6.875429z"
                    p-id="9774"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li> -->
          </ul>
        </button>
        <button class="btn btn-jelly new-quote">
          <span class="btn-text">一言</span
          ><span class="btn-icon"
            ><svg
              t="1583933187735"
              class="icon"
              viewBox="0 0 1025 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9773"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M380.563302 274.870857q-34.304 52.589714-78.262857 156.013714-12.580571-25.746286-21.138286-41.398857t-23.113143-36.278857-29.110857-32.256-35.986286-19.968-46.592-8.265143l-128 0q-7.972571 0-13.165714-5.12t-5.12-13.165714l0-109.714286q0-7.972571 5.12-13.165714t13.165714-5.12l128 0q142.848 0 234.276571 128.585143zM1024.001016 731.428571q0 7.972571-5.12 13.165714l-182.857143 182.857143q-5.12 5.12-13.165714 5.12-7.460571 0-12.873143-5.412571t-5.412571-12.873143l0-109.714286q-18.285714 0-48.566857 0.292571t-46.299429 0.585143-41.691429-0.585143-40.594286-2.852571-36.571429-5.997714-35.986286-10.605714-33.133714-16.310857-33.718857-22.820571-31.451429-30.573714-32.036571-39.716571q33.718857-53.174857 77.677714-156.013714 12.580571 25.746286 21.138286 41.398857t23.113143 36.278857 29.110857 32.256 35.986286 19.968 46.592 8.265143l146.285714 0 0-109.714286q0-7.972571 5.12-13.165714t13.165714-5.12q6.875429 0 13.677714 5.705143l182.272 182.272q5.12 5.12 5.12 13.165714zM1024.001016 219.428571q0 7.972571-5.12 13.165714l-182.857143 182.857143q-5.12 5.12-13.165714 5.12-7.460571 0-12.873143-5.412571t-5.412571-12.873143l0-109.714286-146.285714 0q-27.428571 0-49.737143 8.557714t-39.424 25.746286-29.110857 35.108571-25.746286 44.251429q-18.285714 35.401143-44.544 97.718857-16.603429 37.741714-28.306286 63.414857t-30.866286 59.977143-36.571429 57.124571-42.276571 47.396571-51.419429 39.131429-60.854857 23.990857-73.142857 9.435429l-128 0q-7.972571 0-13.165714-5.12t-5.12-13.165714l0-109.714286q0-7.972571 5.12-13.165714t13.165714-5.12l128 0q27.428571 0 49.737143-8.557714t39.424-25.746286 29.110857-35.108571 25.746286-44.251429q18.285714-35.401143 44.544-97.718857 16.603429-37.741714 28.306286-63.414857t30.866286-59.977143 36.571429-57.124571 42.276571-47.396571 51.419429-39.131429 60.854857-23.990857 73.142857-9.435429l146.285714 0 0-109.714286q0-7.972571 5.12-13.165714t13.165714-5.12q6.875429 0 13.677714 5.705143l182.272 182.272q5.12 5.12 5.12 13.165714z"
                p-id="9774"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'randomQuote',
  data() {
    return {
      socialShareURLMap: {
          twitter: "https://twitter.com/intent/tweet?hashtags=quotes&text=",
          facebook: "",
          tumblr: ""
      },
      PALETTE: [
        {
          color: "333, 32%, 43%",
          bg: require('../public/bg.jpg')
        },
        {
          color: "222, 53%, 43%",
          bg: require('../public/bg1.jpg')
        },
        {
          color: "274, 33%, 37%",
          bg: require('../public/bg2.jpg')
        },
        {
          color: "346, 39%, 34%",
          bg: require('../public/bg3.jpg')
        },
        {
          color: "253, 53%, 29%",
          bg: require('../public/bg4.jpg')
        },
        {
          color: "358, 74%, 65%",
          bg: require('../public/bg5.jpg')
        },
        {
          color: "329, 36%, 22%",
          bg: require('../public/bg6.jpg')
        },
        {
          color: "25, 76%, 39%",
          bg: require('../public/bg7.jpg')
        },
        {
          color: "17, 44%, 39%",
          bg: require('../public/bg8.jpg')
        },
        {
          color: "200, 27%, 51%",
          bg: require('../public/bg9.jpg')
        }
          
          // "#4A3F55",
          // "#E5B8BD",
          // "#C2617E",
          // "#C2617E",
          // "#B7D7B6",
          // "#b46d95",
          // "#c5848b",
          // "#79A7B5",
          // "#D29595",
          // "#E8A8C9",
          // "#C45F41",
          // "#EF99A3",
          // "#48939D"
      ],
      API_URL: "https://v1.hitokoto.cn/",
      loadingBar: null,
      hitokoto: null,
      from: null,
      newQuoteBtn: null,
      root: null,
      twitter: null,
      faecbook: null,
      tumblr: null,
      progress: null,
      currentClassName: null
    }
  },
  mounted() {
    this.$nextTick(async ()=>{
      await this.initDom()
      await this.init()
    })
    const randomQuoteDom = document.getElementById('randomQuote')
    document.getElementsByClassName('hero')[0].append(randomQuoteDom);
  },
  methods: {
    initDom() {
      this.loadingBar = document.querySelector(".loading-bar");
      this.hitokoto = document.querySelector(".hitokoto-text");
      this.from = document.querySelector(".from-text");
      this.newQuoteBtn = document.querySelector(".new-quote");
      this.root = document.querySelector(":root");
      // this.twitter = document.querySelector(".twitter");
      // this.faecbook = document.querySelector(".facebook");
      // this.tumblr = document.querySelector(".tumblr");
    },
    async init() {
      this.newQuoteBtn.addEventListener("click", async () => {
          await this.setQuote();
          await this.setSocialBtn();
      });
      // init();
      await this.setQuote();
      await this.setSocialBtn();
    },
    async setQuote() {
      const currentShow = this.sample(this.PALETTE)
      this.root.style.setProperty("--theme-bg", `url(${currentShow.bg})`);
      if (sessionStorage.getItem('theme')) {
        this.currentClassName = sessionStorage.getItem('theme')
        if (this.currentClassName === 'light') {
          this.root.style.setProperty("--theme-color", `hsl(${currentShow.color})`);
        } else {
          let themeColorList = currentShow.color.split(',')
          themeColorList[2] = '70%'
          this.root.style.setProperty("--theme-color", `hsl(${themeColorList.join(',')})`);
        }
      } else {
        this.currentClassName = 'light'
        this.root.style.setProperty("--theme-color", `hsl(${currentShow.color})`);
      }
      // this.root.style.setProperty("--theme-color", `hsl(${currentShow.color})`);
      
      sessionStorage.setItem('themeColor', currentShow.color)
      // console.log(currentShow.color, currentShow.color.split(',')[2])
      this.loadingBar.style.setProperty("--progress-value", `${0}`);
      this.loadingBar.classList.remove("complete");
      let data = JSON.parse((await this.request({ url: this.API_URL, method: "GET" })));
      this.hitokoto.textContent = data.hitokoto;
      this.from.textContent = data.from;
      this.loadingBar.classList.add("complete");
    },
    setSocialBtn() {
      // [this.twitter, this.faecbook, this.tumblr].forEach(socialBtn => {
      //   console.log(socialBtn)
      //   let hitokotoText = this.hitokoto.textContent;
      //   let fromText = this.from.textContent;
      //   let content = `"${hitokotoText}" ${fromText} #quotes`;
      //   let url = `${this.socialShareURLMap[socialBtn.className]}${content}`;
      //   if (socialBtn.className === "tumblr") {
      //       url = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&content=${hitokotoText}&caption=${fromText}`;
      //   }
      //   if (socialBtn.className === "facebook") {
      //       url = "#";
      //   }
      //   socialBtn.setAttribute("href", url);
      // });
    },
    sample(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    },
    request(request) {
      return new Promise(resolve => {
          let xhr = new XMLHttpRequest();
          xhr.open(request.method, request.url);
          xhr.onprogress = (e) => {
              this.progress = (e.loaded / e.total) * 100;
              this.loadingBar.style.setProperty("--progress-value", `${this.progress}`);
          };
          xhr.send();
          xhr.onload = (e) => {
              resolve(e.target.response);
          };
      });
    }
  }
};
</script>

<style scoped>
#randomQuote {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  /* background: var(--theme-color); */
  transition: 1s;
}

:root {
  --theme-color: #1a1e23;
}

.loading-bar {
  --bar-color: #ccd1d9;
  --progress-color: #4a89dc;
  --progress-value: 0;
  --ease-out-quartic: cubic-bezier(0.165, 0.84, 0.44, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 6px !important;
  background: var(--bar-color);
  transform: translate(-50%, -50%);
  transition: 0.6s var(--ease-out-quartic);
  z-index: 20;
}
.loading-bar::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--progress-color);
  transform: scaleX(calc(var(--progress-value) / 100));
  transform-origin: left;
  transition: 0.1s linear;
}
.loading-bar.complete {
  opacity: 0;
  visibility: hidden;
}

.quote-box {
  width: 450px;
  padding: 20px 25px;
  color: var(--theme-color);
  background: rgba(236, 239, 252, 0.5);
  backdrop-filter: saturate(180%) blur(5px);
  border-radius: 24px;
}
.quote-box .quote-text {
  max-height: 120px;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  transition: 0.6s;
  color: var(--theme-color);
  border: none;
  background-color: transparent;
}
.quote-box .quote-text .hitokoto {
  height: auto !important;
  font-size: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: self-start;
}
.quote-box .quote-text .hitokoto .hitokoto-text:empty::before {
  content: "数据获取失败";
}
.quote-box .quote-text .from {
  align-self: flex-end;
  padding-top: 15px;
}
.quote-box .quote-text .from .from-text:empty::before {
  content: "佚名";
}
.quote-box .quote-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.btn-share {
  --btn-color: #275efe;
  position: relative;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: white;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  filter: drop-shadow(0 2px 8px transparent);
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.btn-share::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: var(--theme-color);
  border-radius: 24px;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), background 0.6s;
}
.btn-share .btn-text,
.btn-share .btn-icon {
  display: inline-flex;
  vertical-align: middle;
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.btn-share .btn-text {
  transition-delay: 0.05s;
}
.btn-share .btn-icon {
  margin-left: 8px;
  transition-delay: 0.1s;
}
.btn-share .social-icons {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform: translateY(-50%);
}
.btn-share .social-icons li {
  flex: 1;
}
.btn-share .social-icons li a {
  display: inline-flex;
  vertical-align: middle;
  transform: translateY(55px);
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.btn-share .social-icons li a:hover {
  opacity: 0.5;
}
.btn-share:hover::before {
  transform: scale(1.2);
}
.btn-share:hover .btn-text,
.btn-share:hover .btn-icon {
  transform: translateY(-55px);
}
.btn-share:hover .social-icons li a {
  transform: translateY(0);
}
.btn-share:hover .social-icons li:nth-child(1) a {
  transition-delay: 0.15s;
}
.btn-share:hover .social-icons li:nth-child(2) a {
  transition-delay: 0.2s;
}
.btn-share:hover .social-icons li:nth-child(3) a {
  transition-delay: 0.25s;
}

.btn {
  position: relative;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: white;
  text-decoration: none;
  background-color: var(--theme-color);
  border: none;
  border-radius: 24px;
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.6s;
}
.btn .btn-text,
.btn .btn-icon {
  display: inline-flex;
  vertical-align: middle;
}
.btn .btn-icon {
  margin-left: 8px;
}
.btn-jelly:hover {
  animation: jelly 0.5s;
}

@keyframes jelly {
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>