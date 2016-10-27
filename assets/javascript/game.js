
// STAR WARS RPG JAVASCRIPT CODE ===============================================================================

// player arrays: health, attack, counter
var hero;
var choosePlayer = true;
var chooseEnemy = true;

var aPlayer1 = [120, 8, 5];
var aPlayer2 = [100, 6, 8];
var aPlayer3 = [150, 10, 13];
var aPlayer4 = [180, 12, 10];

function init() {

	$('#player1').click (function() {
		if (choosePlayer == true) {
			choosePlayer = false;

			if(this.id == "player1") {
				hero = this;
				$('#player1').css("background-color","#00FF00");
				$('#player1').css("border-color","#00FF00");

				$('#player2').appendTo('#your_enemies');
				$('#player3').appendTo('#your_enemies');
				$('#player4').appendTo('#your_enemies');
				
				chooseDefender();
			}
		}
	});

	$('#player2').click (function() {
		if (choosePlayer == true) {
			choosePlayer = false;

		if(this.id == "player2") {
			hero = this;
				$('#player2').css("background-color","#00FF00");
				$('#player2').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player3').appendTo('#your_enemies');
				$('#player4').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});

	$('#player3').click (function() {
		if (choosePlayer == true) {
			choosePlayer = false;

		if(this.id == "player3") {
			hero = this;
				$('#player3').css("background-color","#00FF00");
				$('#player3').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player2').appendTo('#your_enemies');
				$('#player4').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});

	$('#player4').click (function() {
		if (choosePlayer == true) {
			choosePlayer = false;

		if(this.id == "player4") {
			hero = this;
				$('#player4').css("background-color","#00FF00");
				$('#player4').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player2').appendTo('#your_enemies');
				$('#player3').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});
}
init();

//====================Pick an enemy====================

function chooseDefender() {

		$('#player1').click (function() {
		if (chooseEnemy == true) {
			chooseEnemy = false;

			if (this != hero) {

				if(this.id == "player1") {
					hero = this;
					$('#player1').css("background-color","#00FF00");
					$('#player1').css("border-color","#00FF00");
	
					$('#player2').appendTo('#your_enemies');
					$('#player3').appendTo('#your_enemies');
					$('#player4').appendTo('#your_enemies');
				
					chooseDefender();
				}
			}
		}
	});

	$('#player2').click (function() {
		if (chooseEnemy == true) {
			chooseEnemy = false;

		if(this.id == "player2") {
			
			if (this != hero) {

				$('#player2').css("background-color","#00FF00");
				$('#player2').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player3').appendTo('#your_enemies');
				$('#player4').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});

	$('#player3').click (function() {
		if (chooseEnemy == true) {
			chooseEnemy = false;

		if(this.id == "player3") {
			hero = this;
				$('#player3').css("background-color","#00FF00");
				$('#player3').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player2').appendTo('#your_enemies');
				$('#player4').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});

	$('#player4').click (function() {
		if (chooseEnemy == true) {
			chooseEnemy = false;

		if(this.id == "player4") {
			hero = this;
				$('#player4').css("background-color","#00FF00");
				$('#player4').css("border-color","#00FF00");

				$('#player1').appendTo('#your_enemies');
				$('#player2').appendTo('#your_enemies');
				$('#player3').appendTo('#your_enemies');
				console.log("moved to enemies");

				chooseDefender();
			}
		}
	});
}
}