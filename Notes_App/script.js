const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea  class ="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deletetBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = text

    deletetBtn.addEventListener('click', () => {
      note.remove()
    })
    
    editBtn.addEventListener('click', () => {
       main.classList.toggle('hidden')
       textArea.classList.toggle('hidden')
     })

     textArea.addEventListener('input', (e) => {
     const{value}  = e.target
      main.innerHTML = value
     })

   document.body.appendChild(note)

}