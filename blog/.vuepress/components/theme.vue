<template>
  <div id="theme">
    <img :src="require('../public/light.svg')" alt="" @click="themeClick('light')" v-if="currentClassName === 'light'"/>
    <img :src="require('../public/dark.svg')" alt="" @click="themeClick('dark')" v-else/>
  </div>
</template>

<script>
  export default {
    name: 'theme',
    data() {
      return {
        currentClassName: 'light',
        lightObj: {
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
        },
        darkObj: {
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
          '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.6)',
          '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.7)',
          '--text-color': 'rgba(255, 255, 255, 0.8)',
          '--text-color-sub': '#8B8B8B',
          '--border-color': 'rgba(0, 0, 0, 0.3)',
          '--code-color': 'rgba(0, 0, 0, 0.3)',
          '--mask-color': '#000'
        },
        root: null,
        dom: null
      }
    },
    watch: {
      currentClassName(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.init()
        }
      }
    },
    mounted() {
      this.dom = document.getElementsByTagName('html')[0]
      if (sessionStorage.getItem('theme')) {
        this.currentClassName = sessionStorage.getItem('theme')
      }
      this.currentClassName = document.getElementsByTagName('html')[0].className
      this.root = document.querySelector(":root")
    },
    methods: {
      init() {
        if (this.currentClassName === 'dark') {
          this.dom.classList.replace('light', 'dark')
          for (const i in this.darkObj) {
            this.root.style.setProperty(i, this.darkObj[i]);
          }
        } else {
          this.dom.classList.replace('dark', 'light')
          for (const i in this.darkObj) {
            this.root.style.setProperty(i, this.lightObj[i]);
          }
        }
        this.dom = document.getElementsByTagName('html')[0]
        sessionStorage.setItem('theme', this.currentClassName)
      },
      themeClick(value) {
        console.log(66666)
        this.currentClassName === value
        this.init()
      }
    }
  }
</script>

<style lang="stylus" scoped>
#theme {
  background-color: red;  
}
</style>