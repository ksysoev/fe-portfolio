;
$(document).ready( function(){
    $('.dropdown, .dropdown__link').click( function(event){
        event.stopPropagation()
        event.currentTarget.blur();
        $('.dropdown__content').toggleClass( "dropdown__content_status_opened");
    });
});
