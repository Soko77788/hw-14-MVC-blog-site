document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
  console.log(email, password)
        if (email && password) {
          try {
            const response = await fetch('/api/users/login', {
              method: 'POST',
              body: JSON.stringify({ email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
  
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert('Failed to log in.');
            }
          } catch (err) {
            console.error('Login error:', err);
            alert('Failed to log in. Check the console for details.');
          }
        }
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
  
        if (name && email && password) {
          try {
            const response = await fetch('/api/users', {
              method: 'POST',
              body: JSON.stringify({ name, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
  
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert('Failed to sign up.');
            }
          } catch (err) {
            console.error('Signup error:', err);
            alert('Failed to sign up. Check the console for details.');
          }
        }
      });
    }
  });
  