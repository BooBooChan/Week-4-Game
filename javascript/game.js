
//REMEMBER TO CONSOLE.LOG EVERTHING! LEAVE NO STONE UNTURNED!

//Step 1: Create variables on which all your functions operate (characters, stats).
var characters = ["Mufasa", "Bambis-Mom", "Gothel", "Queen", "A-n-I", "Frollo", "Kerchak", "James"]; 
var hp = 100
var atk = [4,3,1,3,2,1,4,2]
var catk = [5,8,7,10,7,6,9,5]

//Step2: Create FUNCTIONs for your INTEGERs. 


//Step 3: Assign stats to EACH character.

/*""characters.indexOf() = atk.indexOf();
characters.indexOf() = catk.indexOf();""*/

/*Step 4: Create FUNCTIONs which subtract attack value from hp and add increasing multiple of base atk
to current atk power after every turn. For balance, catk will need to be much higher than base atk.*/
var currentHp = ___;
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
	console.log($("img").on("click", function charSelect()));
	confirm("Is this your desired champion and parent? You cannot change parents midway through the game."); 
	if(confirm() = true){
	alert("You have selected " + characters.indexOf() + ". May the best parent win and live to tell the tale!");
	console.log(if(confirm() = true));

	//Float selected character to the left for the rest of the game. Float all other characters to the right.

	//Allow the user to select his/her opponent each battle
	$("img").on("click", function oppSelect() {
	/*retrieve a CSS attribute. Put a colored border around the selected character.
	Then create a confirm() method to ask user if that's the character they want to use all throughout the game. If yes, let the slaughtering begin!*/
	console.log($("img").on("click", function charSelect()));
	confirm("Do you wish to fight " + opponent + 
		"next?"); 
	if(confirm() = true){
	alert(player1 + "will be fighting " + opponent + ". When the bell rings, I mean, er, the OK button clicks, start killing each other!");
	console.log(if(confirm() = true));
};

});
var player1 = charSelect
var opponent = oppSelect
//Step 6: Create a FUNCTION which removes character from roster when hp =< 0
if(opponent.remainHp <= 0) {
	function loser() {
		
	}
}
/*Step 7: Create a CONDITIONAL which displays the victory screen when all opponents are eliminated, 
and one which displays the Game Over screen when player's hp =< 0*/

//Step 8: 



/*---Not a single JS command is affecting the page or console. Even if there are errors or misplaced characters,
the console should have detected them and vaguely notified me. My only conclusion left is that the JS is not
properly linked to the HTML. I've corrected my <script> tags 3 times, placed them in the <head> tags, the <body> tags,
Placed one <script> in the <head> and other in the <body>, then tried reversing the order of those <script> sheets,
nothing seems to work. Try to get help on that*/