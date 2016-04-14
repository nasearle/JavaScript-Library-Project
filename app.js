// trigger when the user clicks Login
$('#login').click(function() {

	// if the user chooses a title, display a formal greeting
	if ($('#title').val() != '--') {
		
		// create the Greetr object with title + firstname as the first argument,
		// and lastname as the second
		var g = G$($('#title').val() + ' ' + $('#firstname').val(), $('#lastname').val());

		// hide the elements in the first login page
		$('#logindiv').hide();

		// perform the setLang, HTMLGreeting, and log methods on the Greetr object.
		g.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
	
	// if the user does not choose a title, display an informal greeting 
	} else {

		// create the Greetr object
		var g = G$($('#firstname').val(), $('#lastname').val());

		// hide the elements
		$('#logindiv').hide();

		// same as above. HTMLGreeting is passed false so the greeting will be informal
		g.setLang($('#lang').val()).HTMLGreeting('#greeting', false).log();

	}
});
