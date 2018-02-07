
//REMEMBER TO CONSOLE.LOG EVERTHING! LEAVE NO STONE UNTURNED!
$(document).ready(function(){

//Step 1: Create variables on which all your functions operate (characters, stats).
var characters = ["mufasa", "bambisMom", "gothel", "queen", "aNI", "frollo", "kerchak", "james"]; 
var hp = 100;
var bAtk = [16,15,13,16,15,13,17,14];
var atk = 0;
var atk = atk + bAtk
var catk = [1,3,5,5,3,1,4,5];

//Step2: Create FUNCTIONs for your INTEGERs. 


//Step 3: Assign stats to EACH character.
for(i < characters.length; i = 0; i++){
	for(j < atk.length; j = 0; j++){
		characters[i] == atk[i];
		characters[i] == catk[i];
	};
	for(k < catk.length; k = 0; k++){

	};
};
//Check to see if the above system works. If not, use the method commented below.

/*""characters[i] = atk[i];
characters[i] = catk[i];""*/

/*Step 4: Create FUNCTIONs which subtract attack value from hp and add increasing multiple of base atk
to current atk power after every turn. For balance, catk will need to be much higher than base atk.*/
var currentHp = 100;
player.currentHp = player.currentHp - opponent.catk;
opponent.currentHp = opponent.currentHp = player.atk;
var remainHp = function ouchies(currentHp) {
	currentHp - catk;
	console.log(ouchies)
	//You need remainHp to replace currentHp after every opponent's turn.
};


/*Step 5: Create an EVENT which causes characters to respond to the CLICK of a mouse. Then create a FUNCTION which causes
opponent to counter attack after player clicks.*/
//Assign images to each index in var characters. Remember how to pull elements to JS.
//CAUTION: Keep in mind in which order the characters take their turn.

//But first, allow the user to pick a fighter.

$("img").on("click", function charSelect() {
	/*retrieve a CSS attribute. Put a colored border around the selected character.
	Then create a confirm() method to ask user if that's the character they want to use all throughout the game. If yes, let the slaughtering begin!*/
	// console.log($("img").on("click", function charSelect()));
	confirm("Is this your desired champion and parent? You cannot change parent candidates midway through the game."); 
	if(confirm() = true){
		alert("You have selected " + /*id of image HTML element*/ + ". May the best parent win and live to tell the tale!");
		console.log("Player selected.");
	};
	//The code needs to recognize which image is assigned to which variable of the characters array.


	//Float selected character to the left for the rest of the game. Float all other characters to the right.
	if(charselect()){ //This condition may be redundant since we're writing this code below the executed function.
		//Add a new id to the selected image element, and call it #player.
		$("#player").css(/*float the player's character image to the left*/);
		if($("img") !== $("#player")){
			$("img").css(/*float the opponents' images to the right*/);
		};
	};
	//Allow the user to select his/her opponent each battle
	$("img").on("click", function oppSelect() {
		/*retrieve a CSS attribute. Put a colored border around the selected character.
		Then create a confirm() method to ask user if that's the character they want to use all throughout the game. If yes, let the slaughtering begin!*/
		// console.log($("img").on("click", function charSelect()));
		confirm("Do you wish to fight " + opponent + 
			"next?"); 
		if(confirm() = true){
		alert(player + "will be fighting " + opponent + ". When the bell rings, I mean, er, the OK button clicks, start killing each other!");
		console.log(if(confirm() = true));
		};
	};
});
var player = charSelect;
var opponent = oppSelect;
//Step 6: Create a FUNCTION which removes character from roster when hp =< 0
if(opponent.remainHp <= 0) {
	var loser = str.replace(opponent, ___);
	$(#opponent).attr(/*replace source path to profile image with path to loss image*/ src = "../loss/ ");
	player.atk = player.atk + player.bAtk
	
};

/*Step 7: Create a CONDITIONAL which displays the victory screen when all opponents are eliminated, 
and one which displays the Game Over screen when player's hp =< 0*/
for(i < opponent.length; i = 0; i ++){
	if ()
}
});
//Step 8: 



/*---Not a single JS command is affecting the page or console. Even if there are errors or misplaced characters,
the console should have detected them and vaguely notified me. My only conclusion left is that the JS is not
properly linked to the HTML. I've corrected my <script> tags 3 times, placed them in the <head> tags, the <body> tags,
Placed one <script> in the <head> and other in the <body>, then tried reversing the order of those <script> sheets,
nothing seems to work. Try to get help on that*/