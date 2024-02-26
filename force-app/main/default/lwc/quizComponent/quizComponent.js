// quizComponent.js
import { LightningElement, track } from 'lwc';

export default class QuizComponent extends LightningElement {
    @track questions = [
        {
            id: 1,
            text: 'What is 2 + 2?',
            choices: ['1', '2', '3', '4'],
            correctAnswer: ['1','2','3','4'],
            selectedAnswer: [],
        },
        {
            id: 2,
            text: 'What is 10 - 1?',
            choices: ['11', '9', '8', '7'],
            correctAnswer: ['9'],
            selectedAnswer: [],
        }
    ];
    @track displayQuestions = true;
    @track displayResults = false;
    @track percentage = 0;

    handleCheckboxChange(event) {
        const questionId = event.target.dataset.questionId;
        const selectedAnswer = event.target.value;

        // Update the selected answers for the corresponding question
        const question = this.questions.find(q => q.id === questionId);
        if (question) {
            const selectedAnswers = [...question.selectedAnswer];

            if (event.target.checked) {
                selectedAnswers.push(selectedAnswer);
            } else {
                const answerIndex = selectedAnswers.indexOf(selectedAnswer);
                if (answerIndex !== -1) {
                    selectedAnswers.splice(answerIndex, 1);
                }
            }

            question.selectedAnswer = selectedAnswers;
        }
    }

    // quizComponent.js
    handleSubmit() {
        // Check if the selected answers are correct
        const isCorrect = this.questions.every(question => {
            const correct = JSON.stringify(question.correctAnswer.sort());
            const selected = JSON.stringify(question.selectedAnswer.sort());
            console.log('Correct:', correct);
            console.log('Selected:', selected);
            console.log('Comparison:', correct === selected);
            return correct === selected;
        });
        
        console.log('isCorrect', isCorrect);
    
        // Set the percentage based on correctness
        this.percentage = isCorrect ? 100 : 0;
    
        // Update display properties
        this.displayQuestions = false;
        this.displayResults = true;
    }
    
}