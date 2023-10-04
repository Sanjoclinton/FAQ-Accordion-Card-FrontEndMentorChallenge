// Constants

let current;
const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question-container');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', function() {
        answers[index].classList.toggle("hide");
        question.classList.toggle("bold");
        arrows[index].classList.toggle('arrow-upside');

        for(let i = 0; i < arrows.length; i++) {
            if (index !== i) {
                answers[i].classList.add("hide");
                questions[i].classList.remove("bold");
                arrows[i].classList.remove('arrow-upside');
            }
        }
    });
});