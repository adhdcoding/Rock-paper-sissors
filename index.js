// document.getElementById('rock-btn').addEventListener('click', userRock())



function computerChooses(){
    result = Math.floor((Math.random() * 3)+1)
    // if (result == 1){
    //     message = "The computer chooses Rock"
    // } else if (result == 2){
    //     message = "The computer chooses Paper"
    // } else if (result == 3){
    //     message = "The computer chooses Sissors"
    // }
    return result
}

// computerChooses()

function playRounds(){
    for (i = 0; i <5; i++){
        console.log(computerChooses())
    }
}

function userRock(){
    userChoice = 'Rock'
    computerChooses()
    if (result == 1){
        console.log('The computer chooses Rock! its a tie!')
    } else if (result == 2){
        console.log('The computer chooses Paper! You lose :( ')
    } else if (result == 3){
        console.log('The computer chooses Sissors! You win! :D ')
    }
}
userRock()
function whoWins(){
    console.log('1')
}