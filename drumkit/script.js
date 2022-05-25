window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play()
    console.log(key)

    key.classList.add('playing')

}) 

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}


const keys = Array.from(document.querySelectorAll('.kit'))

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


