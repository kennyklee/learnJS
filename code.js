// The data store:
var usersData = [
  {firstName: "tommy", lastName: "MalCom", email: "test@test.com", id: 102},
  {firstName: "Peter", lastName: "breCht", email: "test2@test2.com", id: 103},
  {firstName: "RoHan", lastName: "sahu", email: "test3@test3.com", id: 104}
];

// A quick utility function that does what it says:
function titleCaseName(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Our object with the chainable methods
var userController = {

    currentUser: "",

    findUser: function (userEmail) {
        var arrayLength = usersData.length, i;
        for (i = arrayLength - 1; i >= 0; i--) {
            if (usersData[i].email === userEmail) {
                this.currentUser = usersData[i];
                break;
            }
        }
        return this;
    },

    formatName: function () {
        if (this.currentUser) {
            this.currentUser.fullName = titleCaseName(this.currentUser.firstName) + " " + titleCaseName(this.currentUser.lastName);
        }
        return this;

    },

    createLayout: function () {
        if (this.currentUser) {
            this.currentUser.viewData = "Member: " + this.currentUser.fullName + "" + "ID: " + this.currentUser.id + "" + "Email: " + this.currentUser.email + "";
        }
        return this;
    },

    displayUser: function () {
        if (!this.currentUser) return;

        $(".members-wrapper").append(this.currentUser.viewData);

    }
};

// Objects and object constructors
debugger
const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      print("I'm inside");
   }
}

// Object Constructors
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'


  // Example of constructing an object
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
      return title + author + pages
    }
  }
  
  var book = new Book("The Hobbit", "JJR", "300")
  
  console.log(book.info())

// Prototypes
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

// 