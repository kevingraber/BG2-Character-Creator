// var d6 = function() {
// 	Math.floor(Math.random()*6 + 1) 
// }
var race = function(name, minStr, maxStr, minDex, maxDex, minCon, maxCon, minInt, maxInt, minWis, maxWis, minCha, maxCha) {
	this.name = name;
	this.minStr = minStr;
	this.maxStr = maxStr;
	this.minDex = minDex;
	this.maxDex = maxDex;
	this.minCon = maxCon;
	this.maxCon = maxCon;
	this.minInt = minInt;
	this.maxInt = maxInt;
	this.minWis = minWis;
	this.maxWis = maxWis;
	this.minCha = minCha;
	this.maxCha = maxCha;
}

var human = new race('Human', 3, 18, 3, 18, 3, 18, 3, 18, 3, 18, 3, 18)
var elf = new race('Elf', 3, 18, 7, 19, 6, 17, 8, 18, 3, 18, 8, 18)


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

$("#chooseRace").on('change', function() {
	// alert($("#chooseRace").val())
	character.race = $("#chooseRace").val();
	switch($("#chooseRace").val()) {
		case 'Human':
			character.race = human;
			break;
		case 'Elf': 
			character.race = elf;
			break;
		default:
			break;
	}
	$("#raceDisplay").text( character.race.name )
})

$("#reRoll").click(function() {
	generateStats();
})

$("input:radio[name=gender]").click(function() {
	character.gender = $(this).val()
	$("#genderDisplay").text(character.gender)
});
