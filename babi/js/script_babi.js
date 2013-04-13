/* Author: Joao Portela
    just some half-backed javascript to show the "secret"
*/


$(document).ready(function()
{
    $('#secret').change(function()
    {
        if($(this).val() == "beijinhos") {
            $('#images').fadeIn();
        } else {
            $('#hint').fadeIn();
            // $('#secret').css('background-color','#FF000');
        }
    });
});




