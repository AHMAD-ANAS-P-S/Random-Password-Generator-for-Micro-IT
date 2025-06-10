function generatePassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
  const length = 12;
  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    password += characters[randIndex];
  }
  document.getElementById("password").value = password;
}
