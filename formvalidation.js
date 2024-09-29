const sname=document.getElementById("studentname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const conpassword=document.getElementById("confirmpassword");
const form=document.getElementById("form");
const signin=document.getElementById("signin");

const  name_error=document.getElementById("name_error");
const email_error=document.getElementById("email_error");
const pass_error=document.getElementById("password_error");
const confirmpassword_error=document.getElementById('confirmpassword_error');

form.addEventListener('submit',(e)=>{
    var email_check=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(sname.value===''|| sname==null){
        e.preventDefault();
        name_error.innerHTML="Name is required";
    }
    else{
        name_error.style.display="none";
    }
 
    if(!email.value.match( email_check)||email.value===''){
        e.preventDefault();
        email_error.innerHTML="Please enter the valid email id";
    }
    else{
        email_error.style.display="none";
    }
    if(password.value.length<=5||password.value===''){
      e.preventDefault();
        pass_error.innerHTML="Please must be alteast 6 characters";  
    }
    else{
        password_error.style.display="none";
    }
    if(!conpassword.value===password.value||conpassword.value===''){
        e.preventDefault();
        confirmpassword_error.innerHTML="Confirm Password doesn't Match";  
    }
    else{
        confirmpassword_error.style.display='none';
    } 
});

signin.addEventListener('click',(e)=>{
 
});




