
// add user
const addUser =document.querySelector('#addUser');
addUser.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=addUser['email'].value;
    const password=addUser['password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // close the signup modal & reset form
        
        addUser.reset();
      });



})
    