const myLibrary = [];

//i should just loop through this and all the books that aren't added to the dom
function Book(author,title,pages,isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}


function addBookToLibrary() {
  // do stuff here
}


//create a button observer

let submitBtn = document.querySelector("#book-submit");
let form = document.querySelector("form");
let content = document.querySelector(".library-content-container");  //query select its parent to append into

submitBtn.addEventListener("click",(e)=>{
  console.log("yup");
  // get author,pages and read
  let author = document.querySelector("#book-author");
  let title = document.querySelector("#book-title");
  let pages = document.querySelector("#book-pages");
  let isRead = document.querySelector("#book-read");
  
  // create book object
  let newBook = new Book(author.value, title.value, pages.value, isRead.checked);//creates book instance
  myLibrary.push(newBook);//add book object to array

  createCard(title.value);//creates card for dom
  console.table(myLibrary);
})




function createCard(bookTitle){
  //create elements
  let card = document.createElement("div");
  let h1 = document.createElement("h1");
  let iconDiv = document.createElement("div");
  let buttonDiv = document.createElement("div");
  let button = document.createElement("button");
  let button2 = document.createElement("button");

  //append those elements
  content.appendChild(card);//add card to dom
  card.appendChild(h1);
  card.appendChild(iconDiv);
  card.appendChild(buttonDiv);
  buttonDiv.appendChild(button);
  buttonDiv.appendChild(button2);

  //add class
  iconDiv.classList.toggle("icon");
  button.classList.toggle("del");
  card.classList.toggle("card");

  //add content
  h1.textContent = bookTitle;//set title of book as h1 content
  button.textContent = "delete";
  button2.textContent = "read";
}


content.addEventListener("click",(e)=>{//content group event listener
  let target = e.target;//info about where and what we clicked
  let cardToDel= target.closest(".card");//selecting the closes ancestor with class "card"

  if(target.classList.contains("del")){//if the target has the class is "del"
    cardToDel.remove();//if true delete the card
    //remove from array
  }
  let title = target.closest(".card").querySelector("h1").textContent;//get the text content of card's h1
  deleteBook(title);
  console.table(myLibrary);
  //i also have to delete from the array
  //how do i associate the array index to the element? //add id?
  //delete it by it containing title
})


//remove from array
//find the array position to delete
//delete it

function deleteBook(title){

  const index = myLibrary.findIndex(element => element.title === title);//get its index from its title
  myLibrary.splice(index,1)

}
