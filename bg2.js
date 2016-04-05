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
var halfelf = new race('Half-Elf', 3, 18, 6, 18, 6, 18, 4, 18, 3, 18, 3, 18)
var gnome = new race('Gnome', 6, 18, 3, 18, 8, 18, 7, 19, 2, 17, 3, 18)
var halfling = new race("Halfling", 6, 17, 8, 19, 10, 18, 6, 18, 3, 17, 3, 18)
var dwarf = new race('Dwarf', 8, 18, 3, 17, 12, 19, 3, 18, 3, 18, 2, 16)
var orc = new race('Orc', 4, 19, 3, 18, 4, 19, 1, 16, 3, 18, 3, 18)


var character = {}

var generateStats = function() {

	var total = 0;

	var roll3d6 = function() {
		return (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
	}

	while (total < 75) {

		character.str = roll3d6()
		$("#str").text( character.str )

		character.dex = roll3d6()
		$("#dex").text( character.dex )

		character.con = roll3d6()
		$("#con").text( character.con )

		character.int = roll3d6()
		$("#int").text( character.int )

		character.wis = roll3d6()
		$("#wis").text( character.wis )

		character.cha = roll3d6()
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
