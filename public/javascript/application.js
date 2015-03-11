$(document).ready(function() {
    console.log( "ready!" );
    var newContactForm = $('#new-contact');
    $('#all').on('click', function() {
    	$.ajax({
    		url: '/contacts',
    		method: 'GET'
    	}).done(function(response){
    		console.log("done");
    		console.log(response);  
    		$.each(response, function(i, contact_info){
    			$('.contacts-container').append('<p>' + contact_info['firstname'] + ' ' + contact_info['lastname'] + '</p>');
    		});  		
    	});
    });

    $("#submit-button").on('click', function(event) {
    	event.preventDefault();
    	var newContact = {}
    	newContact.firstname = newContactForm.find('[name=firstname]').val();
    	newContact.lastname = newContactForm.find('[name=lastname]').val();
    	newContact.email = newContactForm.find('[name=email]').val();
    	newContact.phone_number = newContactForm.find('[name=phone_number]').val();
    	$.ajax({
    		url: '/contacts',
    		method: 'POST',
    		data: newContact
    	});
    });

    var searchButton = $('#search-button');
    searchButton.on('click', function(event) {
    	event.preventDefault();
    	var objectId = {}
    	objectId.id = $('#search-id').val();
    	$.ajax({
    		url: '/contacts/id',
    		method: 'GET',
    		data: objectId,

    		success: displayContact,
    		dataType: 'json',
    		contentType: 'application/json;charset=utf-8'
    	});
    	displayContact(objectId);
    });
    	function displayContact(contact) {
    		$('.search-results').append('<p>' + contact['firstname'] + ' ' + contact['lastname'] + '</p>');
    	};
});





