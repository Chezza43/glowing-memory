
const slotIndex = ['0','1','2']
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
    slot1.innerHTML = slotIndex[Math.floor(Math.random() * slotIndex.length)]
    slot2.innerHTML = slotIndex[Math.floor(Math.random() * slotIndex.length)]
    slot3.innerHTML = slotIndex[Math.floor(Math.random() * slotIndex.length)]
    winner = getWinner();
}

function getWinner(){
    if(slot1.innerHTML === slot2.innerHTML){
        if(slot2.innerHTML === slot3.innerHTML){
            winner = true;
        }
    }
    return winner;
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