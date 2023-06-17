const toasts = document.getElementById('toasts')
const button = document.getElementById('button')


const messages = [
    'Message one',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click',() => createNotification('This is invalid data', 'error'))

function createNotification (message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : 'info')

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 2000);
    }

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

