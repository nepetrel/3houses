function generatePairing(){
allCharacters = new Array("Dimitri",   "Felix", "Sylvain",  "Hubert",   "Edelgard",  "Claude",   "Ferdinand", "Dedue", "Ashe",  "Rhea",  "Dorothea",  "Lorenz",   "Bernadetta",   "Linhardt",  "Hilda", "Seteth",   "Mercedes",  "Ingrid",   "Caspar",   "Blue Lions",   "Rodrigue",  "Annette",  "Lysithea",  "Marianne",  "Glenn", "Miklan",   "Yuri",  "Flayn", "Petra", "Balthus",  "Ignatz",   "Sothis",   "Black Eagles",  "Cyril", "Constance", "Raphael",  "Leonie",   "Hapi",  "Catherine", "Lambert",  "Sex Bandits",  "Shamir",   "Alois", "Tentacle Monster",  "OCs",  "Golden Deer",  "Gilbert",  "Randolph",  "Ladislava", "Fleche");


 var threesome = Math.floor(Math.random()*100);
var pairing = "";
  if(threesome >= 86){
     pairing=allCharacters[Math.floor(Math.random()* allCharacters.length)] + "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)]+ "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)];
  }
  else{
     pairing= allCharacters[Math.floor(Math.random()* allCharacters.length)] + "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)];
  }

  document.getElementById("pairingResult").innerHTML=pairing;
}
