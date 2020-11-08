const loginForm=document.querySelector('#loginForm');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=loginForm['email'].value;
    const password=loginForm['password'].value;

      auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    window.location.href = "https://keen-neumann-07d094.netlify.app/blog/admin/posts/";
    loginForm.reset();
  });
    
})

