function Book(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
}
var Data = [];
var dialog = document.getElementById("dialog");
var tbody = document.getElementById("books");
var id = document.getElementById("id");
var title = document.getElementById("title");
var author = document.getElementById("author");

function generateToken() {
  const randomNum = Math.random() * 9000;
  return Math.floor(1000 + randomNum);
}
function closedialog() {
  dialog.style.display = "none";
  dialog.close();
}
function opendialog() {
  dialog.style.display = "flex";
  id.value = generateToken();
  dialog.show();
}
function addbook() {
  event.preventDefault();
  let x = 1;
  Data.forEach(function (book, i) {
    if (book.id == id.value) {
      x = 0;
    }
  });
  if (x === 0) {
    alert("Id already exists");
  } else if (title.value.length > 10) {
    alert("Title length should be less than 10");
  } else if (!title.value) {
    alert("Title can't be blank");
  } else if (author.value > 10) {
    alert("Author should be a less than 10.");
  } else if (!author.value) {
    alert("Author can't be blank");
  } else {
    var bookdata = new Book(id.value, title.value, author.value);
    Data.push(bookdata);
  }
  displayBooks(Data);
  dialog.style.display = "none";
  dialog.close();
}
function asc() {
  var filteredData = Data.slice();
  filteredData.sort(function (a, b) {
    return a.id - b.id;
  });

  displayBooks(filteredData);
  dialog.style.display = "none";
  dialog.close();
}
function dsc() {
  var filteredData = Data.slice();
  filteredData.sort(function (a, b) {
    return b.id - a.id;
  });

  displayBooks(filteredData);
  dialog.style.display = "none";
  dialog.close();
}
function unOrder() {
  displayBooks(Data);
  dialog.style.display = "none";
  dialog.close();
}

function displayBooks(Data) {
  tbody.innerHTML = "";
  Data.forEach(function (book, index) {
    var rowHTML = `
      <tr>
        <td>${index + 1}</td>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
      </tr>
    `;
    tbody.innerHTML += rowHTML;
  });
}
