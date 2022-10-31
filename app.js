// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')

// function nameChanger(){
//     let sth = heading2.innerText === 'Guess My Number'
//     if (sth){
//         heading2.innerText = 'Jasper'
//     }else{
//         heading2.innerText = 'Guess My Number'
//     }
// }
// btn.addEventListener('click',nameChanger)

// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')
// const number = document.querySelector('.number')

// function nameChanger(){
//     let randomNumber = Math.ceil(Math.random()*6)
//     number.textContent = randomNumber
// }
// btn.addEventListener('click',nameChanger)

// In Input fields, To get the data from an input field, you need to pass a .value
// let inputField = document.querySelector('.guess')
// inputField.value = 20
// console.log(typeof Number(inputField.value));


const btn = document.querySelector('.check')

function logic (){
    const message = document.querySelector('.message')
    let guessedNumber = Math.ceil(Math.random()*6)
    const number = document.querySelector('.number')
    let score = document.querySelector('.score')
    let heading = document.querySelector('h2')
    number.textContent = guessedNumber
    let body = document.body.style
    let guess = document.querySelector('.guess').value
    if(!guess){
        message.textContent = 'no number'
    }else if(Number(guess) === guessedNumber){
        message.textContent = 'Winner🏆'
        body.backgroundColor = 'yellowGreen'

    }else{
        message.textContent = 'Loser 🤦‍♂️'
        body.backgroundColor = 'rgb(69,69,34)'
        if(score.textContent == 0){
            number.textContent = ''
            score.textContent = 0
            guess.value = ''
        } else{
            score.textContent--

        }
    } 
    if(score.textContent == 0){
        heading.textContent= 'Trials exceeded,please click on Play again button to restart'
    }

}
btn.addEventListener('click',logic)

// const refresh = document.querySelector('.again')
// function reload(){
//     window.location.reload()
// }
// refresh.addEventListener('click',refresh)


