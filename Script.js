let question = document.getElementById("question");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let next = document.getElementById("next");

let num1, num2, op, correctAnswer;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 11) + 1;
  num2 = Math.floor(Math.random() * 11) + 1;
  op = Math.floor(Math.random() * 2);

  if (op == 0) {
    question.innerHTML = num1 + " + " + num2 + " = ?";
    correctAnswer = num1 + num2;
  } else {
    question.innerHTML = num1 + " - " + num2 + " = ?";
    correctAnswer = num1 - num2;
  }
}

generateQuestion();

document.addEventListener("submit", function (event) {
  event.preventDefault();

  if (parseInt(answer.value) == correctAnswer) {
    result.innerHTML = "Jawaban benar!";
    next.style.display = "block";
    next.style.margin = "0 auto";
    next.style.marginTop = "15px";
  } else {
    result.innerHTML = "Jawaban salah. Coba lagi!";
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id == "next") {
    generateQuestion();
    answer.value = "";
    result.innerHTML = "";
    next.style.display = "none";
  }
});

const logout = document.getElementById("logout");
logout.style.cursor = "pointer";
logout.addEventListener("click", function () {
  if (confirm("Anda yakin ingin keluar?")){
    window.location.href = "Login.html";
  }
});