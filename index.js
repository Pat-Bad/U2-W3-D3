const getBooks = function () {
    const books = fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            else { throw new Error('Cannot reach server') }})
        .then((books) => {console.log('we have these books', books)
            books.forEach((book)=>{
                const cardsRow = document.getElementById('cardContainer')
                const newCol = document.createElement('div')
                newCol.classList.add('col', 'col-4', 'col-md-3')
                newCol.innerHTML = `<div class="card g-3 my-3">
  <img src=${book.img} class="card-img-top" alt="book cover">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">${book.price}</p>
    <a href="#" class="btn btn-warning dischargeButton">Discharge</a>
  </div>
</div>`
cardsRow.appendChild(newCol)
const card = newCol.querySelector('.card')
const dischargeButton = newCol.querySelector('.dischargeButton')
dischargeButton.addEventListener('click', function () {
    card.classList.add('d-none')})

})


            })
            
    .catch ((error) => { console.log('Error!') })}


getBooks()

