
const slotIndex = ['0','1'/*,'2','3','4','5'*/]
const slots = document.querySelectorAll('div');
const message = document.querySelector('p');
const spinBtn = document.querySelector('button');

spinBtn.addEventListener('click', initialize)

const slot1 = document.getElementById('slot-1');
const slot2 = document.getElementById('slot-2');
const slot3 = document.getElementById('slot-3');

let winner = null;

function initialize(){
    winner = null;
    render();
}

function spin() {
    slotOutput = slots.innerHTML;
    for(i = 0; i < 10; i++){
       slotOutput = slotIndex[Math.floor(Math.random * slotIndex.length + 1)];
       console.log(slotOutput)
    }
    winner = getWinner();
}

function getWinner(){
    if(slot1.innerHTML === slot2.innerHTML){
        if(slot2.innerHTML === slot3.innerHTML){
            return winner;
        }
    }
    console.log(winner)
    render();
}

function render(){
    spin();
    renderMessage();
}

function renderMessage(){
    if(winner){
        message.innerHTML = 'You win!'
    }else{
        message.innerHTML = 'Try again.'
    }
}