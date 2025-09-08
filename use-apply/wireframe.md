# Low-Fidelity Wireframe for Microsoft Copilot Simulation

## Purpose
This simulation is designed to provide students with an accessible way to explore how Microsoft Copilot works without using live models. It serves as an educational tool to optimize their prompts and understand Copilot's functionalities.

## UI Layout (Microsoft Copilot Style)

### Main Interface
- **Header Bar**
  - Microsoft Copilot logo (left)
  - "Learning Mode" indicator (center)

### Main Learning Area
- **Welcome Screen**
  - Clear title: "Learn Effective Prompting with Copilot"
  - Brief instructions on how to use the simulation
  - Start button to begin the learning exercise

### Exercise Area
- **Focused Learning Space**
  - Current prompt exercise prominently displayed
  - Clear instructions for the current step
  - Visual indicators of prompt improvement progress

- **Chat Interface**
  - Messages alternate between:
    - User messages (right, light background)
    - Copilot responses (left, with Copilot icon)
  - Code blocks have:
    - Syntax highlighting
    - Copy button
    - Language indicator

### Interaction Area
- **Input Section**
  - Clear prompt input field
  - Submit button to test the prompt

### Response Display
- **Text Responses**
  - Clean, readable formatting
  - Clear distinction between prompt and response
  - Highlighted improvements in the response

# Interactive Learning Features

## Prompt Evolution Interface
The simulation includes interactive features to teach effective prompting, integrated seamlessly into the Copilot-style UI.

### Learning Panel (Slides out from right)
- **Header:** "Learn Better Prompting"
- **Progress Indicator:** Shows current prompt improvement step
- **Interactive Elements:**
  - Toggles for prompt improvements
  - Real-time preview of changes
  - Explanation of each improvement

### Prompt Improvement Steps
Each step introduces a prompt enhancement technique with real-time feedback:

1. **Basic Prompt**
   - Example: "Write about acute intoxication"
   - Shows baseline Copilot response

2. **Add Context** (Blue highlight)
   - Toggle adds: "in emergency medicine"
   - Shows improved response with medical context

3. **Specify Format** (Green highlight)
   - Toggle adds: "Write a professional report about"
   - Shows response in report format

4. **Define Audience** (Yellow highlight)
   - Toggle adds: "for healthcare providers"
   - Shows response with medical terminology

5. **Set Tone** (Purple highlight)
   - Toggle adds: "professional and detailed"
   - Shows more formal, comprehensive response

6. **Request Examples** (Orange highlight)
   - Toggle adds: "Include examples of symptoms, diagnostic methods, and treatment protocols"
   - Shows response with specific examples

### Visual Feedback
- Changes appear in real-time in both:
  - The prompt input field
  - The Copilot response area
- Highlighting matches Microsoft Copilot's color scheme
- Animations smooth the transitions between steps

## Technical Implementation

### Essential Styling
- **Color Scheme**
  - Limited color palette focusing on:
    - Learning element highlights
    - Clear text contrast
    - Emphasis on important interactions

- **Typography**
  - Clear, readable font
  - Consistent text hierarchy for:
    - Instructions
    - Prompts
    - Responses
    - Feedback

- **Layout**
  - Simple grid system
  - Focus on learning content
  - Clear visual hierarchy

### Core Interactive Elements
- **Learning Controls**
  - Simple toggle buttons for prompt improvements
  - Clear feedback indicators
  - Progress tracking

### Development Notes
- **Key Requirements**
  - Clean, focused JavaScript
  - Responsive layout
  - Accessible design

## Additional Notes
- This simulation is for educational purposes
- UI matches Microsoft Copilot's design language
- Responsive design works on all screen sizes