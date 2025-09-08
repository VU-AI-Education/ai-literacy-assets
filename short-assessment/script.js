class QuizApp {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isCorrect = false;
        this.analytics = new QuizAnalytics();
        
        this.initializeElements();
        this.bindEvents();
        this.showWelcomeScreen();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.feedbackScreen = document.getElementById('feedback-screen');
        this.explanationScreen = document.getElementById('explanation-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Quiz elements
        this.progressFill = document.getElementById('progress-fill');
        this.questionCounter = document.getElementById('question-counter');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');

        // Feedback elements
        this.feedbackIcon = document.getElementById('feedback-icon');
        this.feedbackTitle = document.getElementById('feedback-title');
        this.feedbackMessage = document.getElementById('feedback-message');

        // Explanation elements
        this.explanationTitle = document.getElementById('explanation-title');
        this.explanationVisual = document.getElementById('explanation-visual');
        this.explanationText = document.getElementById('explanation-text');

        // Results elements
        this.finalScore = document.getElementById('final-score');
        this.scoreBreakdown = document.getElementById('score-breakdown');

        // Buttons
        this.startQuizBtn = document.getElementById('start-quiz');
        this.showExplanationBtn = document.getElementById('show-explanation');
        this.nextQuestionBtn = document.getElementById('next-question');
        this.backToFeedbackBtn = document.getElementById('back-to-feedback');
        this.continueFromExplanationBtn = document.getElementById('continue-from-explanation');
        this.restartQuizBtn = document.getElementById('restart-quiz');
    }

    bindEvents() {
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        this.showExplanationBtn.addEventListener('click', () => this.showExplanation());
        this.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        this.backToFeedbackBtn.addEventListener('click', () => this.showFeedback());
        this.continueFromExplanationBtn.addEventListener('click', () => this.nextQuestion());
        this.restartQuizBtn.addEventListener('click', () => this.restartQuiz());
    }

    showScreen(screenElement) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        // Show target screen
        screenElement.classList.add('active');
    }

    showWelcomeScreen() {
        this.showScreen(this.welcomeScreen);
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.analytics.trackQuizStart();
        this.analytics.startQuestionTimer();
        this.loadQuestion();
        this.showScreen(this.quizScreen);
    }

    loadQuestion() {
        const question = quizData[this.currentQuestion];
        
        // Update progress
        const progress = ((this.currentQuestion + 1) / quizData.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionCounter.textContent = `Question ${this.currentQuestion + 1} of ${quizData.length}`;

        // Display question
        this.questionText.textContent = question.question;

        // Display options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'option';
            optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionElement.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(optionElement);
        });
    }

    selectAnswer(selectedIndex) {
        const question = quizData[this.currentQuestion];
        this.isCorrect = selectedIndex === question.correct;
        const timeSpent = this.analytics.getQuestionTimeSpent();
        
        // Store user answer
        this.userAnswers[this.currentQuestion] = {
            selected: selectedIndex,
            correct: question.correct,
            isCorrect: this.isCorrect
        };

        // Track analytics
        this.analytics.trackAnswer(
            question.id,
            selectedIndex,
            this.isCorrect,
            timeSpent
        );

        // Update score
        if (this.isCorrect) {
            this.score++;
        }

        // Disable all options and show correct/incorrect styling
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.add('disabled');
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !this.isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // Show feedback after a brief delay
        setTimeout(() => {
            this.showFeedback();
        }, 1000);
    }

    showFeedback() {
        this.showScreen(this.feedbackScreen);

        if (this.isCorrect) {
            this.feedbackIcon.textContent = '🎉';
            this.feedbackTitle.textContent = 'Correct!';
            this.feedbackTitle.className = 'feedback-title correct';
            this.feedbackMessage.textContent = 'Well done! You got it right.';
            this.nextQuestionBtn.style.display = 'inline-flex';
        } else {
            this.feedbackIcon.textContent = '❌';
            this.feedbackTitle.textContent = 'Incorrect';
            this.feedbackTitle.className = 'feedback-title incorrect';
            this.feedbackMessage.textContent = 'That\'s not quite right. Let\'s learn more about this concept.';
            this.nextQuestionBtn.style.display = 'none';
        }

        // Always show explanation button
        this.showExplanationBtn.style.display = 'inline-flex';
    }

    showExplanation() {
        this.showScreen(this.explanationScreen);
        
        const questionId = this.currentQuestion + 1;
        const explanation = explanations[questionId];

        // Track that user viewed the explanation
        this.analytics.trackExplanationView(questionId);

        this.explanationTitle.textContent = explanation.title;
        this.explanationVisual.innerHTML = explanation.visual;
        this.explanationText.textContent = explanation.text;
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < quizData.length) {
            this.analytics.startQuestionTimer();
            this.loadQuestion();
            this.showScreen(this.quizScreen);
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.showScreen(this.resultsScreen);
        
        const percentage = Math.round((this.score / quizData.length) * 100);
        this.finalScore.textContent = `${this.score}/${quizData.length} (${percentage}%)`;
        
        // Track quiz completion
        this.analytics.trackQuizComplete(this.score, quizData.length);
        
        let performanceMessage = '';
        if (percentage >= 90) {
            performanceMessage = 'Excellent! You have a strong understanding of generative AI concepts.';
        } else if (percentage >= 70) {
            performanceMessage = 'Good job! You have a solid grasp of most concepts.';
        } else if (percentage >= 50) {
            performanceMessage = 'Not bad! There\'s room for improvement in some areas.';
        } else {
            performanceMessage = 'Consider reviewing the material and trying again.';
        }

        // Get analytics summary
        const summary = this.analytics.getSummary();
        const averageTimePerQuestion = Math.round(summary.averageTimePerQuestion / 1000); // Convert to seconds
        const totalTime = Math.round(summary.totalTime / 1000); // Convert to seconds
        
        this.scoreBreakdown.innerHTML = `<p>${performanceMessage}</p>`;
        
        // Update analytics display
        document.getElementById('correct-answers').textContent = this.score;
        document.getElementById('incorrect-answers').textContent = quizData.length - this.score;
        document.getElementById('explanations-viewed').textContent = summary.explanationViewCount;
        document.getElementById('avg-time').textContent = `${averageTimePerQuestion} sec`;
        document.getElementById('total-time').textContent = `${totalTime} sec`;

        // Save analytics data
        this.analytics.save();
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.showWelcomeScreen();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
