// weather search feature?
// ...like in weather dashboard hw

$('#random-fact').on('click', function() {
	var number = Math.floor((Math.random() * plantFactArray.length));
    $("#factText").text(plantFactArray[number])
});

const plantFactArray = ['tomatoes can sense fear','most mushrooms are carnivorous', 'Aloe: Aloe vera plants should be completely dry before being watered again!', 'Snake plants do not need a lot of water or light.', 'succulents babey!', 'The leaves of the Peperomia plant hold water well.']