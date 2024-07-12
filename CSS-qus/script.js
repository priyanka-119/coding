
function submitQuiz() {
    const answers = {
        q1: 'B',
        q2: 'A',
        q3: 'B',
        q4:'B',
        q5: 'A',
        q6: 'B',
        q7:'B',
        q8:'A',
        q9:'A',
        q10:'A',
        q11:'A',
        q12:'B',
        q13:'A',
        q14:'A',
        q15:'A',
        q16:'A',
        q17:'A',
        q18:'A',
        q19:'A',
        q20:'D'

    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let allAnswered = true;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedAnswer) {
            allAnswered = false;
            break;
        }
        if (selectedAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }

    if (!allAnswered) {
        alert('Please answer all questions');
        return;
    }


    const result = document.getElementById('result');
    result.textContent = `You have scored ${score} out of ${totalQuestions}!`;
   
}


