class QuizAnalytics {
    constructor() {
        this.interactions = [];
        this.startTime = Date.now();
        this.currentQuestionStartTime = Date.now();
    }

    trackAnswer(questionId, selectedAnswer, isCorrect, timeSpent) {
        this.interactions.push({
            type: 'answer',
            timestamp: new Date().toISOString(),
            questionId: questionId,
            selectedAnswer: selectedAnswer,
            isCorrect: isCorrect,
            timeSpent: timeSpent // in milliseconds
        });
    }

    trackExplanationView(questionId) {
        this.interactions.push({
            type: 'explanation_view',
            timestamp: new Date().toISOString(),
            questionId: questionId
        });
    }

    trackQuizStart() {
        this.interactions.push({
            type: 'quiz_start',
            timestamp: new Date().toISOString()
        });
    }

    trackQuizComplete(score, totalQuestions) {
        const totalTime = Date.now() - this.startTime;
        this.interactions.push({
            type: 'quiz_complete',
            timestamp: new Date().toISOString(),
            score: score,
            totalQuestions: totalQuestions,
            totalTime: totalTime // in milliseconds
        });
    }

    startQuestionTimer() {
        this.currentQuestionStartTime = Date.now();
    }

    getQuestionTimeSpent() {
        return Date.now() - this.currentQuestionStartTime;
    }

    // Get analytics data
    getAnalytics() {
        return this.interactions;
    }

    // Calculate summary statistics
    getSummary() {
        const answers = this.interactions.filter(i => i.type === 'answer');
        const explanationViews = this.interactions.filter(i => i.type === 'explanation_view');
        const quizComplete = this.interactions.find(i => i.type === 'quiz_complete');

        return {
            totalAnswers: answers.length,
            correctAnswers: answers.filter(a => a.isCorrect).length,
            explanationViewCount: explanationViews.length,
            averageTimePerQuestion: answers.reduce((acc, curr) => acc + curr.timeSpent, 0) / answers.length,
            totalTime: quizComplete ? quizComplete.totalTime : null,
            finalScore: quizComplete ? quizComplete.score : null
        };
    }

    // Save analytics data to local storage
    save() {
        try {
            const existingData = localStorage.getItem('quizAnalytics') || '[]';
            const allSessions = JSON.parse(existingData);
            allSessions.push({
                sessionId: new Date().toISOString(),
                interactions: this.interactions,
                summary: this.getSummary()
            });
            localStorage.setItem('quizAnalytics', JSON.stringify(allSessions));
        } catch (e) {
            console.error('Failed to save analytics:', e);
        }
    }

    // Static method to get all saved sessions
    static getAllSessions() {
        try {
            const data = localStorage.getItem('quizAnalytics');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Failed to retrieve analytics:', e);
            return [];
        }
    }
}
