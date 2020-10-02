// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDu-fRXme0cZL89mJm6LHOYML6CgI9JLx4",
    authDomain: "mybrand-63430.firebaseapp.com",
    databaseURL: "https://mybrand-63430.firebaseio.com",
    projectId: "mybrand-63430",
    storageBucket: "mybrand-63430.appspot.com",
    messagingSenderId: "682370462499",
    appId: "1:682370462499:web:46aafb12e86549b6f2d296"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  let messageRef= firebase.database().ref('messages');

//listen to form submit 

document.getElementById('contactForm').addEventListener('submit', submitForm);

 

function submitForm(e){
    
    // get values
let name=document.getElementById('username').value;
let email=document.getElementById('email').value; 
let phone=document.getElementById('phonenumber').value; 
let message=document.getElementById('message').value;
saveMessage(name,email,phone,message);

//show alert

document.querySelector('.alert').style.display='block';
// hide alert
setTimeout(() => {
    document.querySelector('.alert').style.display='none';
  
}, 3000);

//clear form
document.getElementById('contactForm').reset();
e.preventDefault();

}
 //  fn save message to firebase 
function saveMessage(name,email,phone,message){
    let newMessageRef=messageRef.push();
    newMessageRef.set({
name:name,
email:email,
phone:phone,
message:message

    }); 
    
}
