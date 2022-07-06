<template>
  <div id="loader-wrapper">
    <div class="loading">
      <span style="animation-delay: 0s;">L</span>
      <span style="animation-delay: 0.0666667s;">o</span>
      <span style="animation-delay: 0.133333s;">a</span>
      <span style="animation-delay: 0.2s;">d</span>
      <span style="animation-delay: 0.266667s;">i</span>
      <span style="animation-delay: 0.333333s;">n</span>
      <span style="animation-delay: 0.4s;">g</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadingText: 'loading'
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    init() {
      let letters = this.loadingText.split("");
      console.log(letters,'letterslettersletters')
      loading.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 20}s`;
        loading.append(span);
      })
    }
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
#loader-wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  transtion: all 1s;
  background: var(--theme-color);
}


.loading {
  margin: auto;
  display: flex;
  color: white;
  font-size: 5em;
  font-family: "Baloo Bhaijaan", cursive;
  text-transform: uppercase;
}
.loading span {
  text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  transform: translateY(20px);
  animation: bounce 0.3s ease infinite alternate;
}

@keyframes bounce {
  to {
    text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb, 0 50px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
  }
}
</style>
