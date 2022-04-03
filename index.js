
const hero = {
   heroElementId: "hero",
   heroName: "Wizard",
   heroAvatar: "images/wizard.png",
   heroHealth: 60,
   heroDiceRoll: 6
};

const monster = {
   heroElementId: "monster",
   heroName: "Orc",
   heroAvatar: "images/orc.png",
   heroHealth: 10,
   heroDiceRoll: 4
};

function renderCharacter (data) {
   document.getElementById(data.elementId).innerHTML = 
   `<div class="character-card">
      <h4 class="name"> ${data.name} </h4>
      <img class="avatar" src="${data.avatar}"/>
      <p class="health">health: <b> ${data.health} </b></p>
      <div class="dice-container"><div class="dice"> ${data.diceRoll} </div></div>
   </div>`;
}

renderCharacter(hero);
renderCharacter(monster);