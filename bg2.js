// var d6 = function() {
// 	Math.floor(Math.random()*6 + 1) 
// }
var character = {}

var generateStats = function() {

	var total = 0;

	while (total < 75) {

		character.str = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#str").text( character.str )

		character.dex = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#dex").text( character.dex )

		character.con = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#con").text( character.con )

		character.int = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#int").text( character.int )

		character.wis = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#wis").text( character.wis )

		character.cha = (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
		$("#cha").text( character.cha )

		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);

	}

	

}

$("#reRoll").click(function() {
	generateStats();
})

