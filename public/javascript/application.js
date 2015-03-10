$(document).ready(function() {
    console.log( "ready!" );
    $('#all').on('click', function() {
    	$.ajax({
    		url: '/contacts',
    		method: 'GET'
    	}).done(function(response){
    		console.log("done");
    		console.log(response);  
    		$.each(response, function(i, contact_info){
    			$('.contacts-container').append('<p>' + contact_info['firstname'] + ' ' + contact_info ['lastname'] + '</p>');
    		})  		
    	})
    })
});


