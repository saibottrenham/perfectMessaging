$( document ).ready(function() {

    $( window ).load(function() {    

    $('.SubmitButton').on('click', function(){
        emailSentFunc('#mainContactInfo', ['#fname', '#lname', '#country', '#subject']);
    });


    function emailSentFunc(infoContainer, inputFields){
        var postMessage = '';
        for (let field of inputFields) {
            if ($(field).val() == ''){
                $(infoContainer).html('Please Fill out all fields');
                return
            } 
        }

        for (let field of inputFields) {
            postMessage += field + ' ' + $(field).val() + '\n';
            $(field).val('');
        }

        $.post( "/donate.php", { message: "New Message:\n" + postMessage }, function( data ) {
            if (data == 'Email Sent'){
                $(infoContainer).html(data);
            }    
        });
        return
    }
    
    });
});