console.log("hjhghh");

//Constructor

class Book{
    constructor (name, author, type) {
        this._name = name;
        this._author = author;
        this._type = type;
      }
}

//Display Constructor

// function Display() {}

class Display{

// Add Method to Display ProtoType

//Implementing add functionality
 add (book) {
  let uistring = `<tr>
    <td scope="col">${book._name}</td>
    <td scope="col">${book._author}</td>
    <td scope="col">${book._type}</td>
</tr>`;
  document.getElementById("tableBody").innerHTML += uistring;
}

//Implementing Clear functionality
clear () {
  document.getElementById("libraryForm").reset()
}

//Implementing Validating
validate (book) {
  if (book._name.length < 3 || book._author.length < 3) {
    return false;
  } else {
    return true;
  }
}

//Implementing Show
show (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML =  `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>Messge:</strong> ${displayMessage}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                          </div>`;
  
      setTimeout(function () {
          message.innerHTML='';
      },3000)
  }
  
}


// Add submit EVent Listener to form

let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  if (document.getElementById("fiction").checked == true) {
    type = "Fiction";
  } else if (document.getElementById("programming").checked == true) {
    type = "Computer Programming";
  } else {
    type = "Cooking";
  }

  let book = new Book(name, author, type);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been inserted Successfully");
  } else {
    display.show("danger", "Sorry you cannot add this book");
  }
}

// let addBtn=document.getElementById('addButton');

// addBtn.addEventListener('click',function () {
//     let name=document.getElementById('bookName').value;
//     let author=document.getElementById('author').value;
//     let type;
//     if (document.getElementById('fiction').checked==true) {
//         type="Fiction";
//     }
//     else if (document.getElementById('programming').checked==true) {
//         type='Computer Programming';
//     }
//     else{
//         type='Cooking';
//     }

// })
