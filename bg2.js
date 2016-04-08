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

var elfTest = {
	name: 'Elf',
	str: {
		min: 3,
		max: 18,
		mod: 0
	},
	dex: {
		min: 7,
		max: 19,
		mod: 1
	},
	con: {
		min: 6,
		max: 17,
		mod: -1
	},
	int: {
		min: 8,
		max: 18,
		mod: 0
	},
	wis: {
		min: 3,
		max: 18,
		mod: 0
	},
	cha: {
		min: 8,
		max: 18,
		mod: 0
	}
}


var human = new race('Human', 3, 18, 3, 18, 3, 18, 3, 18, 3, 18, 3, 18)
var elf = new race('Elf', 3, 18, 7, 19, 6, 17, 8, 18, 3, 18, 8, 18)
var halfelf = new race('Half-Elf', 3, 18, 6, 18, 6, 18, 4, 18, 3, 18, 3, 18)
var gnome = new race('Gnome', 6, 18, 3, 18, 8, 18, 7, 19, 2, 17, 3, 18)
var halfling = new race("Halfling", 6, 17, 8, 19, 10, 18, 6, 18, 3, 17, 3, 18)
var dwarf = new race('Dwarf', 8, 18, 3, 17, 12, 19, 3, 18, 3, 18, 2, 16)
var halforc = new race('Half-Orc', 4, 19, 3, 18, 4, 19, 1, 16, 3, 18, 3, 18)

var cls = function(name, minStr, maxStr, minDex, maxDex, minCon, maxCon, minInt, maxInt, minWis, maxWis, minCha, maxCha) {
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

var fighter = new cls('Fighter', 9, 18, 3, 18, 3, 18, 3, 18, 3, 18, 3, 18)

var fighterTest = {
	name: 'Fighter',
	str: {
		min: 9,
		max: 18,
		mod: 0
	},
	dex: {
		min: 3,
		max: 18,
		mod: 1
	},
	con: {
		min: 3,
		max: 18,
		mod: 0
	},
	int: {
		min: 3,
		max: 18,
		mod: 0
	},
	wis: {
		min: 3,
		max: 18,
		mod: 0
	},
	cha: {
		min: 3,
		max: 18,
		mod: 0
	}
}

var character = {}

var pointsRemaining = 0;

var generateStats = function() {

	var total = 0;
	pointsRemaining = 0
	$("#remaining").text(pointsRemaining)

	var roll3d6 = function() {
		return (Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1))
	}

	// var checkStat = function(stat) {
	// 	var number = 0;
	// 	while ((stat.max < (number + stat.mod)) || ((number + stat.mod) < stat.min)) {
	// 		number = roll3d6()
	// 		console.log("Dexterity " + (number + stat.mod))
	// 	}
	// 	console.log("Final Dexterity " + (number + stat.mod))
	// 	return number
	// }

	var checkStat = function(stat, cls) {
		var number = 0;
		while (( (number + stat.mod) > stat.max || (number + stat.mod) > cls.max ) || ((number + stat.mod) < stat.min) || (number + stat.mod) < cls.min) {
			number = roll3d6()
			console.log("min:" + cls.min + (number + stat.mod))
		}
		console.log("Final Dexterity " + (number + stat.mod))
		return number
	}

	while (total < 75) {

		character.str = checkStat(character.race.str, character.cls.str)
		// character.str = roll3d6()
		$("#str").text( character.str )

		character.dex = checkStat(character.race.dex, character.cls.dex)
		// character.dex = roll3d6()
		$("#dex").text( character.dex )

		character.con = checkStat(character.race.con, character.cls.con)
		// character.con = roll3d6()
		$("#con").text( character.con )

		character.int = checkStat(character.race.int, character.cls.int)
		// character.int = roll3d6()
		$("#int").text( character.int )

		character.wis = checkStat(character.race.wis, character.cls.wis)
		// character.wis = roll3d6()
		$("#wis").text( character.wis )

		character.cha = checkStat(character.race.cha, character.cls.cha)
		// character.cha = roll3d6()
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
			character.race = elfTest;
			break;
		case 'Half-Elf': 
			character.race = halfelf;
			break;
		case 'Gnome': 
			character.race = gnome;
			break;
		case 'Halfling': 
			character.race = halfling;
			break;
		case 'Dwarf': 
			character.race = dwarf;
			break;
		case 'Half-Orc': 
			character.race = halforc;
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

$("input:radio[name=class]").click(function() {
	character.cls = fighterTest;
	$("#classDisplay").text(character.cls.name)
});

$("#remaining").text(pointsRemaining)

$("#strup").click(function() {
	if (character.str < character.race.str.max && character.str < character.cls.str.max && pointsRemaining > 0) {
		character.str += 1;
		$("#str").text( character.str )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#str-").click(function() {

	if ( character.str > character.race.str.min && character.str > character.cls.str.min) {
		character.str -= 1;
		$("#str").text( character.str )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})

$("#dexup").click(function() {
	if (character.dex < character.race.dex.max && character.dex < character.cls.dex.max && pointsRemaining > 0) {
		character.dex += 1;
		$("#dex").text( character.dex )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#dex-").click(function() {

	if ( character.dex > character.race.dex.min && character.dex > character.cls.dex.min) {
		character.dex -= 1;
		$("#dex").text( character.dex )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})

$("#conup").click(function() {
	if (character.con < character.race.con.max && character.con < character.cls.con.max && pointsRemaining > 0) {
		character.con += 1;
		$("#con").text( character.con )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#con-").click(function() {

	if ( character.con > character.race.con.min && character.con > character.cls.con.min) {
		character.con -= 1;
		$("#con").text( character.con )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})

$("#intup").click(function() {
	if (character.int < character.race.int.max && character.int < character.cls.int.max && pointsRemaining > 0) {
		character.int += 1;
		$("#int").text( character.int )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#int-").click(function() {

	if ( character.int > character.race.int.min && character.int > character.cls.int.min) {
		character.int -= 1;
		$("#int").text( character.int )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})

$("#wisup").click(function() {
	if (character.wis < character.race.wis.max && character.wis < character.cls.wis.max && pointsRemaining > 0) {
		character.wis += 1;
		$("#wis").text( character.wis )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#wis-").click(function() {

	if ( character.wis > character.race.wis.min && character.wis > character.cls.wis.min) {
		character.wis -= 1;
		$("#wis").text( character.wis )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})

$("#chaup").click(function() {
	if (character.cha < character.race.cha.max && character.cha < character.cls.cha.max && pointsRemaining > 0) {
		character.cha += 1;
		$("#cha").text( character.cha )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining -= 1;
		$("#remaining").text(pointsRemaining)
	}
})

$("#cha-").click(function() {

	if ( character.cha > character.race.cha.min && character.cha > character.cls.cha.min) {
		character.cha -= 1;
		$("#cha").text( character.cha )
		total = parseInt(character.str + character.dex + character.con + character.int + character.wis + character.cha);
		$("#total").text(total);
		pointsRemaining += 1;
		$("#remaining").text(pointsRemaining)
	}

})