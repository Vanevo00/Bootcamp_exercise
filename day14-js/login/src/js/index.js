const logins = ['Vojta', 'Jakub', 'Michal', 'Martin'];
const passwords = ['pes', 'kocka', 'králík', 'kráva'];

const tryLogin = () => {
  const enteredLogin = document.querySelector('#login');
  const enteredPassword = document.querySelector('#password');
  const result = document.querySelector('#result');

  if (logins.indexOf(enteredLogin.value) !== -1 && passwords.indexOf(enteredPassword.value) === logins.indexOf(enteredLogin.value)) {
    result.classList.add('green');
    result.classList.remove('red');
    result.textContent = 'Access Granted!';
  } else {
    result.classList.add('red');
    result.classList.remove('green');
    result.textContent = 'Access Denied!';
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('#button-log');
  loginBtn.addEventListener('click', tryLogin);
});
