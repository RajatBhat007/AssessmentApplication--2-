﻿var assessment_log = [];

function GetDetails(Id_Assessment_question_ans, id_question, Right_Ans, Score_Coins, Id_Assessment, Id_Game, allow_attempt, Id_User, ID_ORGANIZATION,completeTime) {
  
    var QCount = $("#QuestionCount").val();
    var list = {};
    var nextelse = 0;
	

    var time = completeTime;
   var sec= time.substring(2)

    if (completeTime == "0:00")
    {
        Right_Ans = 0;
        Score_Coins = 0;
		 
    }
    //$('#' + Id_Assessment_question).prop('checked', true);
	console.log(assessment_log)
	const AssesmentID=localStorage.getItem('AssesmentID');
	console.log((AssesmentID));



    if (assessment_log.length > 0) {
        for (var i = 0; i < assessment_log.length; i++) {
			
				
				

            if (assessment_log[i].id_question === id_question) {
               
				
				
			    assessment_log[i].is_right = Right_Ans;
                assessment_log[i].score = Score_Coins;
                assessment_log[i].Id_Assessment_question_ans = Id_Assessment_question_ans;
                assessment_log[i].Time = sec;
				assessment_log[i].M2ostAssessmentId=AssesmentID;
					
		
                //delete assessment_log[i];
                //assessment_log.splice(i, i);
                nextelse = 1;

            }
			

        }
    }
    if (nextelse == 0) {
        list.ID_ORGANIZATION = ID_ORGANIZATION;
        list.id_user = Id_User;
        list.Id_Assessment = Id_Assessment;
        list.Id_Game = Id_Game;
        list.attempt_no = allow_attempt;
        list.id_question = id_question;
        list.is_right = Right_Ans;
        list.score = Score_Coins;
        list.Id_Assessment_question_ans = Id_Assessment_question_ans;
        list.Time = sec;
		list.M2ostAssessmentId=AssesmentID;
		
		
		
        assessment_log.push(list);
		
		if(Right_Ans==1){
		
		 openPopup('correct');
		 alert('Correct Answer');
		}else if(Right_Ans==2){
		 alert('Wrong Answer');
		 openPopup('incorrect');

		}
    }
}

  function openPopup(value) {
	  //$('#form_submit_next_btn').css("display","block")
	
  

  }
		
function Save() {
    debugger;
    $.ajax({
        url: $('head base').attr('href') + 'AssessmentList/SaveAssessment',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: '{model: ' + JSON.stringify(assessment_log) + '}',
        success: function (response) {
            if (response.success) {
                console.log(response);

                // Broadcast the entire response object
              window.close()
				
                // Optionally, redirect to another page
                // window.location.href = $('head base').attr('href') + "DashBoard/Index";
            } else {
                myhtml = '<div style="text-align: center;" class="alert-danger"><strong>Danger!</strong> ' + response.Message + '</div>';
            }
        },
        error: function (response) {
            alert("error!");
        }
    });
}




function Qcount(count ) {
    debugger;
    $.ajax({

        url: $('head base').attr('href') + 'AssessmentList/Count?count=' + count,

        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      
       
        
    });
}

