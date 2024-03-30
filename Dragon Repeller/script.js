let xp = 0;
let health = 100;
let gold = 50;



const xpValue = document.querySelector('#xpValue');
const healthValue = document.querySelector('#healthValue');
const goldValue = document.querySelector('#goldValue');

const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');

const text = document.querySelector('#text');

let currentWeapon = 0;
let inventory = ["stick"];

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];

let fighting; 
let monsterHealth;

const monsterStats = document.querySelector('#monsterStats');
const monsterNameText = document.querySelector('#monsterNameText');
const monsterHealthText = document.querySelector('#monsterHealthText');

const monsters = [
    {
        name: "slime",
        level: 2,
        health: 20
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];

const locations = [
    {
        name:"town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text":['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to Town Square'],
        "button functions":[buyHealth, buyWeapon, goTownSquare],
        text:'You are in Store.'
    },
    {
        name: "cave",
        "button text":["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTownSquare],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTownSquare],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTownSquare, goTownSquare, goTownSquare],
        text: "The monster screams 'Arg!' as it dies. You have gained gold and xp points"
    },
    {
        name: "lost match",
        "button text": ["Replay?", "Replay?", "Replay?"],
        "button functions": [Restart, Restart, Restart],
        text: "You lost the Match &#x2620. CLick Replay to play again."
    },
    {
        name: "easter egg", 
        "button text": ["2", "8", "Go to town square?"], 
        "button functions": [pickTwo, pickEight, goTownSquare], 
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

btn1.onclick = goStore;
btn2.onclick = goCave;
btn3.onclick = fightDragon;

function update(location){
    btn1.innerText = location["button text"][0];
    btn2.innerText = location["button text"][1];
    btn3.innerText = location["button text"][2];

    text.innerHTML = location.text;

    btn1.onclick = location["button functions"][0];
    btn2.onclick = location["button functions"][1];
    btn3.onclick = location["button functions"][2];
 
};

function goStore() {
    update(locations[1])
};

function goCave(){
    update(locations[2]);
};

function fightDragon(){
    console.log('fight dragon');
};

function buyHealth(){
   if(gold >= 10){
    gold -= 10;
    health += 10;
    goldValue.innerText = gold;
    healthValue.innerText = health;
   } else {
    text.innerText = "You do not have enough gold to buy health."
   }
};

function buyWeapon(){
if(currentWeapon < weapons.length-1){
    if(gold >= 30){
        gold -= 30;
        currentWeapon++;
        goldValue.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        inventory.push(newWeapon);
        text.innerText = "You now have a " + newWeapon + "." + " In your inventory you have: " + inventory; 
    } else {
        text.innerText = "You do not have enough gold to buy a weapon."
    }
} else {
    text.innerText = "You already have the best weapon."
    btn2.innerText = "Sell weapon for 15 gold.";
    btn2.onclick = sellWeapon;
}
};

function sellWeapon(){
    if(inventory.length >1){
        let soldWeapon = inventory.shift();
        gold += 15;
        goldValue.innerText = gold;
        text.innerText = `You have sold ${soldWeapon}. In your inventory you have: ${inventory}`;
        
    } else {
        text.innerText = `You have only ${inventory} left in your inventory, you can't sell it.`;
    }
};

function goTownSquare(){
    update(locations[0]);
    monsterStats.style.display = "none";
};

function fightSlime(){
    fighting = 0;
    goFight();
};

function fightBeast(){
    fighting = 1;
    goFight();
};

function fightDragon(){
    fighting = 2;
    goFight();
};

function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "flex";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
};

function attack(){
    text.innerText = `The ${monsters[fighting].name} is attacking on you. Attack with ${weapons[currentWeapon].name}.`;

    if(isMonsterHit()){
        monsterHealth -= (weapons[currentWeapon].power + Math.floor(Math.random()*xp) + 1);
    } else {
        text.innerText += " You miss.";
    }
    monsterHealthText.innerText = monsterHealth;

    health -= getMonsterAttackValue(monsters[fighting].level);
    healthValue.innerText = health;

    if(health <= 0){
        lostMatch();
    } else if(monsterHealth <= 0){
        if (fighting === 2) {
            winGame();
        } else {
            defeatedMonster();
        }
    }
    if(Math.random() <= .1 && inventory.length !== 1){
        text.innerText += ` Your weapon ${inventory.pop()} breaks.`;
        currentWeapon--;
    }
};

function defeatedMonster(){
    update(locations[4]);
    xp += monsters[fighting].level;
    xpValue.innerText = xp;

    gold += Math.floor((monsters[fighting].level) * 6.7);
    goldValue.innerText = gold;

    monsterStats.style.display = "none";     
};

function lostMatch(){
    update(locations[5]);
    monsterStats.style.display = "none";
};

function Restart(){
    xp = 0;
    health = 100;
    gold = 50;
    xpValue.innerText = xp;
    healthValue.innerText = health;
    goldValue.innerText = gold;

    currentWeapon = 0;
    inventory = ["stick"];
    
    goTownSquare();
    
};


function dodge(){
    text.innerText = "You dodged the match.";
};

function getMonsterAttackValue(level){
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    return hit > 0 ? hit : 0;
}

function isMonsterHit(){
    return Math.random() > .2;
}

function easterEgg(){
    update(locations[7]);
};

function pick(guess){
    const numbers = [];
    while(numbers.length < 10){
        numbers.push(Math.floor(Math.random()*11));
    }
    text.innerText = `You picked ${guess}. Here are the random numbers:\n`;
    for(let i = 0; i < 10; i++){
        text.innerText += numbers[i] + "\n";
    }
    if(numbers.includes(guess)){
        text.innerText += "Right! You win 20 gold.";
        gold += 20;
        goldValue.innerText = gold;
    } else {
        text.innerText += "Wrong! Your health is reduced by 10.";
        health -= 10;
        healthValue.innerText = health;
        if(health <= 0) {
            lostMatch();
        }
    }
};

function pickTwo(){
    pick(2);
}

function pickEight(){
    pick(8);
}