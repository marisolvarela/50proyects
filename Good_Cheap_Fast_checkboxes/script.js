const toogles = document.querySelectorAll('.toogle')
const goodEl = document.getElementById('good')
const cheapEl = document.getElementById('cheap')
const fastEl = document.getElementById('fast')

toogles.forEach(toogle => toogle.addEventListener('change', (e) => dotheTrick(e.target) ))

function dotheTrick(theClickOn) {
    if(goodEl.checked && cheapEl.checked && fastEl.checked) {
        if(goodEl ===  theClickOn) {
            fastEl.checked = false
        }

        if(cheapEl === theClickOn) {
            goodEl.checked = false
        }

        if(fastEl === theClickOn) {
            cheapEl.checked = false
        }
    }
}