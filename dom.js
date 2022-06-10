const quotes = document.getElementsByTagName("h1")
console.log(quotes[0].innerText)
console.log(quotes[1].innerText)
const coolQuotes = document.getElementsByClassName("cool")
console.log(coolQuotes[0].innerText)
console.log(coolQuotes[1].innerText)


const quotesQuery = document.querySelectorAll("h1")
console.log(quotesQuery)
console.log(quotesQuery[0].innerText)
console.log(quotesQuery[1].innerText)

const todos = document.querySelectorAll(".todo")
console.log(todos[0].innerText)

todos[0].innerText = ".. Enjoy fully as its your Life in your own way..";
for (let todo of todos) {
    console.log(todo, todo.innerText)
    todo.innerText = "help needy Always"
}


const userName = document.querySelector(".user-name")
console.log(userName);
// this will work 100% for all
userName.setAttribute("placeholder", "enter name")

userName.setAttribute("style", "background-color:purple")

// this will not work for all attributes.
// userName.style.backgroundColor = "purple"
// userName.placeholder = "Enter Your Name"

const list = document.querySelector(".hobbies")
    // // replaces Entire List
    // // list.innerHTML = `<li> Cool</li> 
    // 
    //< li > Hot < /li>`

// add to existing list

list.innerHTML += `<li> cool </li>`

const item = document.querySelector('.hobbies > li:nth-Child(2)')
item.innerText = "Films"

// CREATING ELEMENTS

const para = document.createElement("p");
para.innerText = "tomorrow is the day of lord shiva";

document.body.append(para)

const para1 = document.createElement("p")
para1.innerText = "What is Maha Shivratri and why it is celebrated-- Maha Shivratri is considered especially auspicious, as it is supposed to be the night of convergence of Shiva and Shakti, which in essence means the male and feminine energies that keep the world in balance"


document.body.append(para1)