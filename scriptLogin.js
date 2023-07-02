document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek validitas username dan password
    if (username === "admin" && password === "admin123") {
      window.location.href = "Game.html";
    } else {
      alert("Login gagal. Silakan cek kembali username dan password.");
    }
  });

const infoIcon = document.querySelector("img");

infoIcon.addEventListener("click", () => {
  alert("Username : admin \nPassword : admin123")
});
