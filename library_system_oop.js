class Book{
    constructor(title,author,genre){
        this.title=title;
        this.author=author;
        this.genre=genre;
    }

    getInfo(){
        return `Title: ${this.title} \n Author:${this.author} \n Genre:${this.genre}`;
    }
}

class FictionBook extends Book{
    constructor(title,author,genre,pages){
        super(title,author,genre);
        this.pages=pages;
    }
    getInfo(){
        return super.getInfo()+`\nPages: ${this.pages}`
    }
}

class NonFictionBook extends Book{
    constructor(title,author,genre,topic){
        super(title,author,genre);
        this.topic=topic;
    }

    getInfo(){
        return super.getInfo()+`\nTopic:${this.topic}`
    }
}

class Library{
    constructor(){
        this.books=[];
    }

    addBook(book){
        this.books.push(book);
    }

    displayBooks(){
        for(let book of this.books){
            console.log(book.getInfo());
        }
    }
}

let myLibrary=new Library();

let book1=new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 180);
let book2=new NonFictionBook("The Power of Habit", "Charles Duhigg", "Self-Help", "Habits and Psychology");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayBooks();