function validateForm(event) {
    event.preventDefault(); 
   
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
     
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim();
  
    
    if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      return;
    }
  
     
    if (password.length < 8) {
      // alert("Please Enter Correct Phone Number ")

      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
      return;
    }
   
    alert('Login successful!');
    window.location.href = "./new.html"
    
  }
  
  function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  