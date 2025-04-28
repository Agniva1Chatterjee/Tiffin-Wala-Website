const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');

document.getElementById('openSignupLink').onclick = (e) => {
  e.preventDefault(); // Prevents the page from jumping to the top
  signupModal.style.display = 'block';
};    


document.getElementById('openLoginBtn').onclick = () => {
  loginModal.style.display = 'block';
};

document.getElementById('closeSignup').onclick = () => {
  signupModal.style.display = 'none';
};

document.getElementById('closeLogin').onclick = () => {
  loginModal.style.display = 'none';
};

document.getElementById('goToLogin').onclick = () => {
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
};

// Close modals on outside click
window.onclick = (event) => {
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};