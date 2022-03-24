// console.log('hello world')
const message = document.querySelector('#message')

function addMovie(e){
    e.preventDefault()
    let inputField = document.querySelector('input')

const movie = document.createElement('li');

const movieTitle = document.createElement('span');
movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie);
movie.appendChild(movieTitle);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

document.querySelector('ul').appendChild(movie);

inputField.value = ''

}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(e) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    e.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
    revealMessage()
}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')
    
    if (e.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched';
        message.textContent = `${e.target.textContent} watched!`

    } else {
        message.textContent = 'Movie added back!'
        message.textContent = `${e.target.textContent} added back!`

    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}