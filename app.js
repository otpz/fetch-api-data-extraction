let leftBtnDOM = document.querySelector("#left-btn")
let rightBtnDOM = document.querySelector("#right-btn")
let i = 1
leftBtnDOM.addEventListener('click',clickedButton)
rightBtnDOM.addEventListener('click',clickedButton)
function clickedButton(){ 
    let idDOM = document.querySelector("#id")
    let userNameDOM = document.querySelector("#username")
    let nameDOM = document.querySelector("#name")
    let emailDOM = document.querySelector("#e-mail")
    let cityDOM = document.querySelector("#address")
    let streetDOM = document.querySelector("#address")
    let suiteDOM = document.querySelector("#address")
    let phoneDOM = document.querySelector("#phone")
    let websiteDOM = document.querySelector("#website")
    if (this.id == "left-btn"){
        if (i < 1){
            i = 1
        } else{
            i -= 1
        }
    } else{
        if (i > 10){
            i = 10
        }else{
            i += 1
        }
    }
    fetch('https://jsonplaceholder.typicode.com/users').then(
        response => {
            return response.json()
        }   
    ).then(responseTitleJson => { 
        idDOM.innerHTML = `#${responseTitleJson[i].id}`
        userNameDOM.innerHTML = responseTitleJson[i].username
        nameDOM.innerHTML = responseTitleJson[i].name
        emailDOM.innerHTML = `E-mail: ${responseTitleJson[i].email}`
        cityDOM.innerHTML = `city : ${responseTitleJson[i].address.city } <br>
        street : ${responseTitleJson[i].address.street } <br>
        suite : ${responseTitleJson[i].address.suite }`
        phoneDOM.innerHTML = `Phone: ${responseTitleJson[i].phone}`
        websiteDOM.innerHTML = `Website: ${responseTitleJson[i].website}`
    })
}
