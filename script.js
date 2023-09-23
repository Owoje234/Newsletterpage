

function isValidemail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// function isValidemail(email) {
//     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//     console.log(pattern.test(email));
//     return pattern.test(email);
// }

function validateForm(Form) {
    var email = document.getElementById('email').value;
    var error = '';
    if(!email){error=error+' Valid email required <BR>';}
    if(!isValidemail(email)){error=error+'';}
    if(error){
      errormessage(error);return false;
    }2
    return;
}

// function errormessage(message) {
//     document.getElementById('message').innerHTML = message;
//   }