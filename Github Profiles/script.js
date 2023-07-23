const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    // axios(APIURL + username)
    // .then( res => console.log(res.data))
    // .catch( err => console.log(err))
    // const res = await axios( APIURL + username)

    // console.log(res.data)

    // const { data } = await axios( APIURL + username)
    // console.log(data)

    try {
        const { data } = await axios(APIURL + username )

      createUserCard(data)

    } catch(err){
        if(err.response.status === 404) {
            createErrorCArd('No profile with this username')
        }
    }
}

function createUserCard (user) {
    const cardHTML = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
         <li>${user.followers} <strong>Followers</strong></li>
         <li>${user.following} <strong>Following</strong></li>
         <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>
</div>
    
    `
    main.innerHTML = cardHTML
}

function createErrorCArd(msg) {
    const cardHTML = `
    <div class="card">
    <h1> ${msg}</h1>

    `
    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)
       search.value = ''
    }

})
