function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const msg = document.getElementById('message');

  if(!name || !email || !age){
    msg.textContent = 'Please fill all fields';
    return;
  }
  if(!validateEmail(email)){
    msg.textContent = 'Invalid Email';
    return;
  }
  msg.textContent = 'Registration successful';
});
module.exports = { validateEmail }; // for Jest (Node)
