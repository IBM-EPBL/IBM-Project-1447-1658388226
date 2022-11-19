$('#form').submit(function(event){
    console.log("Submitted")
    event.preventDefault()
    $.ajax({
        type: "POST",
        url: $('#form').action,
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val()
        },
        success: function(response){
            console.log("Submited");
        },
        error: function(data){
            console.log("Error");
        }
    });
});