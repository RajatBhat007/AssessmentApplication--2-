function Login() {
   
    var formData = new FormData();
    formData.append("Email", $("#Email").val());
    formData.append("Password", $("#Password").val());

    $.ajax({

        type: 'POST',
        url: $('head base').attr('href') + "Login/UserLogin",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            var myhtml = '';
            if (response.success ) {
               
                window.location.href = $('head base').attr('href') + "AssessmentList/Index";
            }

            else {
                myhtml = '<div  style=" text-align: center;" class="alert alert-info"> <strong>Info!</strong> ' + response.Message + '</div>';
            }
            $("#myAlert").html(myhtml);
            $("#myAlert").fadeIn(500).delay(3000).fadeOut(1000);
        }
        
    });
    return false; // for demo
}

