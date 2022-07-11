
export default  function(){
    if (document.body.contains(document.getElementById('loader-wrapper'))) {
        document.getElementById('loader-wrapper').style.display = 'flex'
        return 
    }
    const loadingWrapper = document.createElement('div')
    const loading = document.createElement('div')
    const loadingText = 'loading'
    loadingWrapper.id = 'loader-wrapper'
    loading.className = 'loading'
    loadingWrapper.append(loading)
    // console.log(letters,'letterslettersletters')
    loading.textContent = "";
    let letters = loadingText.split("");
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 20}s`;
        loading.append(span);
    })
    document.body.append(loadingWrapper)
}
