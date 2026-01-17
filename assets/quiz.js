const finish_btn = document.getElementById("finish-button");
finish_btn.disabled = true;

const quiz_form = document.querySelector("#quizForm");
const answers = {};


quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  let input = event.target;
  answers[input.name] = input.value;

  finish_btn.disabled = !(answers.product_type && answers.bike_type && answers.color);

  console.log("answers: ", answers);
}


finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});
