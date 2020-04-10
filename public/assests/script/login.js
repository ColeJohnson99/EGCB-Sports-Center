
$("#loginbutton").on("click", function(){
    event.preventDefault();
    event.stopPropagation();
    let logincheck = {
        UserID: $("#Username").val().trim(),
        UserPassword: $("#Password").val().trim()
    };
    
    console.log(logincheck);


    $.ajax("/api/login/", {
        type: "GET",
        data: logincheck
      }).then(function(responce) {
        let LoginTrueFalse = responce.body.indatabase;
          
        if (LoginTrueFalse === true){    
         $.ajax("/sportscenter", {
             type: "GET"             
             }).then(function(res){
         res.sendFile(path.join(__dirname,"../public/sportscenter.html"));
        });
        }
        else{
        $("#Successorfail").html("Wrong password or user name!");
        }
        });

});

