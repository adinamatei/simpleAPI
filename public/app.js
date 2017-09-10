
var button = document.querySelector("button");
var username = document.querySelector("#username");
var password = document.querySelector("#password");


button.addEventListener("click", function(){
  var payload = {
    username: username.value,
    password: password.value
  };

  $.ajax({
    url: '/register',
    method: 'POST',
    data: payload,
    error: function(error){
      console.log("error: " , error);
    },
    success: function(data){
      var response = document.querySelector('#response');
      response.textContent = JSON.stringify(data);
    }
  });
});
