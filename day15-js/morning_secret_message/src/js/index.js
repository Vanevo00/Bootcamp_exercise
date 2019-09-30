const showMessage = () => {
  const padlock = document.querySelector('#padlock-img');
  const message = document.querySelector('#BOO');
  message.style.display = 'block';
  padlock.style.display = 'none';
};

const hideMessage = () => {
  const padlock = document.querySelector('#padlock-img');
  const message = document.querySelector('#BOO');
  message.style.display = 'none';
  padlock.style.display = 'block';
};

document.addEventListener('DOMContentLoaded', () => {
  const hiddenMessage = document.querySelector('#hidden-message');
  hiddenMessage.addEventListener('mouseenter', showMessage);
  hiddenMessage.addEventListener('mouseleave', hideMessage);
});
