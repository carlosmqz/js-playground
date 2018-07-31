class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;    
    }
}

class UI{
    addBookToList(book) {
        let bookList = document.getElementById('book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete'>X<a></td>
        `;
        bookList.appendChild(row);
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

    showMessage(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const bookForm = document.querySelector('#book-form');
        container.insertBefore(div, bookForm);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }

    deleteBook(target){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

//Event listener to add a book
document.getElementById('book-form').addEventListener('submit', function(e) {
    let title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    
    let book = new Book(title, author, isbn);
    let ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showMessage('Please fill all the fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showMessage('Book added!', 'success');
        ui.clearFields();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
    ui = new UI();
    ui.deleteBook(e.target);
    ui.showMessage('Book removed!', 'success');
    e.preventDefault();
})