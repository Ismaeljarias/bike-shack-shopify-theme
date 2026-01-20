const finish_btn = document.getElementById("finish-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

finish_btn.disabled = true;

const quiz_form = document.getElementById("quizForm");
const answers = {};

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  let input = event.target;
  answers[input.name] = input.value;

  finish_btn.disabled = !(
    answers.product_type &&
    answers.bike_type &&
    answers.color
  );
}

const updateButtons = (index) => {
  prevButton.disabled = index === 0;
  const isLastQuestion = index === questions.length - 1;
  nextButton.classList.toggle("hidden", isLastQuestion);
  finish_btn.classList.toggle("hidden", !isLastQuestion);
};

let currentQuestionIndex = 0;

prevButton.addEventListener("click", function () {
  currentQuestionIndex--;
  displayQuestion(currentQuestionIndex);
  updateButtons(currentQuestionIndex);
});

nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
  updateButtons(currentQuestionIndex);
});

// generate questions dynamically
const quizContainer = document.querySelector("#quizForm");

const displayQuestion = (index) => {
  let current_question = questions[index];
  let selected_answer = answers[current_question.name] || '';

  quizContainer.innerHTML = `
    <h2>${current_question.text}</h2>
    <div class="label-container">
      ${current_question.options
        .map(
          (option) => `
        <input type="radio" id="${option.value}" name="${current_question.name}" value="${option.value}" ${option.value === selected_answer ? "checked" : ""}>
        <label for="${option.value}">
          <div class="img-wrap">
            <img src="${option.img}">
          </div>
          <span>${option.label}</span>
        </label>
      `,
        )
        .join("")}
    </div>
  `;


// To avoid code injection:
//   const displayQuestion = (index) => {
//   let current_question = questions[index];
//   quizContainer.innerHTML = "";
  
//   const h2 = document.createElement("h2");
//   h2.textContent = current_question.text;
//   quizContainer.appendChild(h2);
  
//   const labelContainer = document.createElement("div");
//   labelContainer.className = "label-container";
  
//   current_question.options.forEach((option) => {
//     const input = document.createElement("input");
//     input.type = "radio";
//     input.id = option.value;
//     input.name = current_question.name;
//     input.value = option.value;
//     input.addEventListener("change", updateAnswers);
    
//     const label = document.createElement("label");
//     label.htmlFor = option.value;
    
//     const imgWrap = document.createElement("div");
//     imgWrap.className = "img-wrap";
//     const img = document.createElement("img");
//     img.src = option.img;
//     imgWrap.appendChild(img);
    
//     const span = document.createElement("span");
//     span.textContent = option.label;
    
//     label.appendChild(imgWrap);
//     label.appendChild(span);
    
//     labelContainer.appendChild(input);
//     labelContainer.appendChild(label);
    
//     if (answers[input.name] === input.value) {
//       input.checked = true;
//     }
//   });
  
//   quizContainer.appendChild(labelContainer);
// };

  const inputs = quizContainer.querySelectorAll("input[type='radio']");
  inputs.forEach((input) => {
    input.addEventListener("change", updateAnswers);
  });

  inputs.forEach((input) => {
    if (answers[input.name] === input.value) {
      input.checked = true;
    }
  });
};

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});

// initialize
displayQuestion(currentQuestionIndex);
updateButtons(currentQuestionIndex);
