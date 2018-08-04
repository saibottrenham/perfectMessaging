$( document ).ready(function() {
    // init code after window finished loading to be absoloutly sure everything works fine
    $( window ).load(function() {   

    // grab the form fields and initialize them on the submit button click

    $('.SubmitButton').on('click', function(){
        // we submit the notification form container and the list of fields we want to sbmit for the form
        emailSentFunc('#mainContactInfo', ['#fname', '#lname', '#country', '#subject']);
    });


    function emailSentFunc(infoContainer, inputFields){
        var postMessage = '';
        //Loop through all form fields and check if they are empty or not, can be expanded
        // for more sophisitacted authentication
        for (let field of inputFields) {
            if ($(field).val() == ''){
                $(infoContainer).html('Please Fill out all fields');
                return
            } 
        }
        // Loop through all the fields and connect them to a message that needs to be submitted
        for (let field of inputFields) {
            postMessage += field + ' ' + $(field).val() + '\n';
            $(field).val('');
        }
        // submit the form fields to php to get it sent out. The message Display is very simple but can be 
        // amended for what is desired.
        $.post( "/donate.php", { message: "New Message:\n" + postMessage }, function( data ) {
            if (data == 'Email Sent'){
                $(infoContainer).html(data);
            }    
        });
        return
    }

    });
});