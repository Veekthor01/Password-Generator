let password = document.getElementById('password');
const genPassword = () => {
const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lengthPassword = 10;
let generatedPassword = '';

for (i = 0; i < lengthPassword; i++) {
  const randomPassword = Math.floor(Math.random() * char.length);
   generatedPassword += char.substring(randomPassword, randomPassword +1);
};
 password.value = generatedPassword;
};

const copyPassword = () => {
  const copyText = document.getElementById('password');
  copyText.select();
  document.execCommand('copy');
}