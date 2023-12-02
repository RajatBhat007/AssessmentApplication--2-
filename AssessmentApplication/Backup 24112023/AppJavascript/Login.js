function Login() {
    var formData = new FormData();
    
	var url=new URL(window.location.href);
	console.log(url);
	var urlParams = new URLSearchParams(window.location.search);
    var paramValue = urlParams.get('userid');
	var assementId= urlParams.get('M2ostAssessmentId')
	var url = window.location.href.toString(); // Convert to string
	console.log(assementId)
	localStorage.setItem("AssesmentID",assementId);


    // Log the value of the 'userid' parameter
    console.log(paramValue);
	
	if(url.includes('userid')){
		 formData.append("Email", paramValue);
		formData.append("Password", 'Tgc@1234')
		
	}
	else {
		 formData.append("Email", $("#Email").val());
		formData.append("Password", $("#Password").val());
	}

   

    $.ajax({
        type: 'POST',
        url: $('head base').attr('href') + "Login/UserLogin",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
	
        success: function (response) {
            var myhtml = '';
            if (response.success) {
               window.location.href = $('head base').attr('href') + "AssessmentList/Index";
            } else {
                myhtml = '<div  style="text-align: center;" class="alert alert-info"><strong>Info!</strong> ' + response.Message + '</div>';
            }
            $("#myAlert").html(myhtml);
            $("#myAlert").fadeIn(500).delay(3000).fadeOut(1000);
			console.log(url)
        }
    });

    return false; // for demo
}
