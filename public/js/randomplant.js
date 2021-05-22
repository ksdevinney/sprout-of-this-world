$('#random-fact').on('click', function() {
	var number = Math.floor((Math.random() * plantFactArray.length));
    $("#factText").text(plantFactArray[number])
});

const plantFactArray = ['Bamboo: it doesn"t even need soil!', 'Aloe: Aloe vera plants should be completely dry before being watered again!', 'Snake plants do not need a lot of water or light.', 'succulents babey!', 'The leaves of the Peperomia plant hold water well.']