document.getElementById("signupformdetails").addEventListener('submit',FormSubmit)

function FormSubmit() {
    
        // Get form values
        let username = document.getElementById('username').value;
        let  password = document.getElementById('passcode').value;
        let email = document.getElementById('emailid').value;

        let userdetails = {
            username:username,
            email:email,
            password:password
        }
        let userdetailsJSON  = JSON.stringify(userdetails);
        localStorage.setItem('userdetails',userdetailsJSON);


}

document.getElementById("loginform").addEventListener('submit',SignIn)
  function SignIn(){
    let email = document.getElementById('signemailid').value
    let password = document.getElementById('signpasscode').value

    let storedUserdetails  = localStorage.getItem('userdetails')


    let storedUserdetailsdata = JSON.parse(storedUserdetails)
  
  if (email === storedUserdetailsdata.email && password === storedUserdetailsdata.password) 
  {
    alert('Login successful!');
}else
{
    alert('Invalid Login')
}

  }
