
function validate(){
    let name=document.getElementById('username').value ;
    if(name ==0 || name==null){
alert('Please fill in the username');
return false;
    }
    let email=document.getElementById('email').value ;
    if(email ==0 || email==null){
alert('Please fill in the email');
return false;
    }
    let phone=document.getElementById('phonenumber').value ;
    if(phone ==0 ||phone ==null ||isNaN(document.getElementById('phonenumber').value)||document.getElementById('phonenumber').value.length !=10){
        alert('Please fill in the phone number with ten digits');
        document.getElementById('phonenumber').focus();
        return false;
            }
    let message=document.getElementById('message').value ;
    if(message ==0 || message==null){
alert('Please fill in the message');
return false;
    }
    if(document.getElementById('phonenumber').value ==0 ||isNaN(document.getElementById('phonenumber').value)||document.getElementById('phonenumber').value.length !=10){
        alert('Please fill in the phone number with ten digits');
        document.getElementById('phonenumber').focus();
        document.getElementById('contactForm').reset();
        return false;
            }
    }
    
     
