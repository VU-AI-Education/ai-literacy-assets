# Interactive Generative AI Literacy Quiz

An interactive web-based quiz application designed to test students' understanding of Generative AI concepts. Students progress through 20 questions with immediate feedback and visual explanations.

## Features

### 🎯 Core Functionality
- **One-by-one question progression**: Students see one question at a time
- **Immediate feedback**: Instant response showing correct/incorrect answers
- **Smart navigation**: 
  - Correct answers → Option to proceed or view explanation
  - Incorrect answers → Must view explanation before proceeding
- **Visual explanations**: Each concept explained with diagrams, flowcharts, and visual aids
- **Progress tracking**: Visual progress bar and question counter
- **Final results**: Complete score breakdown and performance feedback

### 🎨 Visual Design
- **Modern, responsive interface** with smooth animations
- **Educational visuals** for each concept:
  - Concept diagrams for complex ideas
  - Flowcharts for processes
  - Comparison grids for contrasting concepts
  - Visual metaphors to aid understanding
- **Intuitive color coding**: Green for correct, red for incorrect
- **Mobile-friendly** responsive design

### 📚 Content Coverage
The quiz covers 20 essential Generative AI concepts:
1. Generative AI definition and capabilities
2. Large Language Models (LLMs) functionality
3. AI strengths and limitations
4. Zero-shot learning
5. Prompt engineering challenges
6. Token concepts in LLMs
7. Artificial General Intelligence (AGI)
8. Retrieval-Augmented Generation (RAG)
9. Effective AI prompting strategies
10. AI system maintenance
11. RAG vs regular prompting
12. Critical thinking with AI information
13. LLM knowledge limitations
14. Verifying AI-generated content
15. AI-generated media detection
16. AI bias in hiring systems
17. Black box problem in AI
18. AI-generated content copyright
19. AI content regulation
20. Privacy risks with cloud AI

## Setup Instructions

### GitHub Pages Deployment

1. **Create/Navigate to Repository**
   ```bash
   # If creating new repository
   git init
   git remote add origin https://github.com/yourusername/ai-literacy-quiz.git
   
   # If using existing repository
   cd your-repo-directory
   ```

2. **Copy Quiz Files**
   - Copy all files from `interactive-quiz/` folder to your repository root or a subfolder

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add interactive AI literacy quiz"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder (or **/docs** if you placed files there)
   - Click **Save**

5. **Access Your Quiz**
   - Your quiz will be available at: `https://yourusername.github.io/repository-name/`
   - GitHub will provide the exact URL in the Pages settings

### Local Development

To run locally for testing:

1. **Simple HTTP Server (Python)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Node.js HTTP Server**
   ```bash
   npx http-server
   ```

3. **VS Code Live Server Extension**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## File Structure

```
interactive-quiz/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Quiz logic and interaction handling
├── quiz-data.js        # Question data and correct answers
├── explanations.js     # Visual explanations for each concept
└── README.md          # This documentation file
```

## Customization

### Adding New Questions
Edit `quiz-data.js` to add questions:
```javascript
{
    id: 21,
    question: "Your question here?",
    options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    correct: 0  // Index of correct answer (0-3)
}
```

### Adding Explanations
Edit `explanations.js` to add visual explanations:
```javascript
21: {
    title: "Concept Title",
    visual: `<div class="visual-component">Your HTML here</div>`,
    text: "Explanation text here"
}
```

### Styling Changes
Modify `styles.css` to customize:
- Colors (CSS custom properties in `:root`)
- Typography and spacing
- Animation timing
- Layout and responsive breakpoints

## Technical Features

- **Progressive Web App ready** - Works offline after first load
- **Accessible design** - Keyboard navigation and screen reader friendly
- **Performance optimized** - Minimal dependencies, fast loading
- **Cross-browser compatible** - Works on all modern browsers
- **Mobile responsive** - Optimized for all device sizes

## Educational Approach

The quiz follows educational best practices:
- **Immediate feedback** reinforces learning
- **Visual explanations** cater to different learning styles
- **Forced engagement** with incorrect answers ensures concept review
- **Progressive difficulty** builds understanding step-by-step
- **Comprehensive coverage** of essential AI literacy topics

## License

This educational content is provided for academic and educational use. Feel free to adapt and modify for your educational needs.

## Support

For questions or issues:
1. Check the browser console for JavaScript errors
2. Ensure all files are properly uploaded to GitHub
3. Verify GitHub Pages is enabled and configured correctly
4. Test locally first before deploying

---

**Happy learning! 🤖📚**
