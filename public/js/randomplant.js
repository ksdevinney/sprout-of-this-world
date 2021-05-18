$('#random-fact').on('click', function() {
	var number = Math.floor((Math.random() * plantFactArray.length));
    $("#factText").text(plantFactArray[number])
});

const plantFactArray = ['Fact 1','Fact 2', 'Fact 3', 'Fact 4']