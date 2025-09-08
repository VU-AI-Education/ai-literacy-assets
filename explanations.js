const explanations = {
    1: {
        title: "What is Generative AI?",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📚</div>
                    <strong>Training Data</strong>
                    <div style="font-size: 12px; color: #666;">Text, Images, Audio</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">🧠</div>
                    <strong>AI Model</strong>
                    <div style="font-size: 12px; color: #666;">Learns Patterns</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">✨</div>
                    <strong>New Content</strong>
                    <div style="font-size: 12px; color: #666;">Generated Output</div>
                </div>
            </div>
        `,
        text: "Generative AI is artificial intelligence that can create new, original content by learning patterns from existing data. Unlike traditional AI that simply classifies or predicts, generative AI produces novel outputs like text, images, music, or code that didn't exist before."
    },
    2: {
        title: "How Large Language Models Work",
        visual: `
            <div class="flowchart">
                <div class="flow-step">📝 Input: "The cat sat on the..."</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Analyzes context and patterns</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🎯 Predicts most likely next word</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">💭 Output: "mat" (or "chair", "sofa")</div>
            </div>
        `,
        text: "Large Language Models generate text by predicting the next word based on the context of previous words. They analyze patterns in language from massive datasets to understand relationships between words and concepts, enabling them to produce coherent, contextually appropriate text."
    },
    3: {
        title: "Generative AI's Strengths and Limitations",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item highlight">
                    <div style="font-size: 24px; margin-bottom: 8px;">✅</div>
                    <strong>High Accuracy</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Text generation, language translation, content creation</div>
                </div>
                <div class="comparison-item">
                    <div style="font-size: 24px; margin-bottom: 8px;">⚠️</div>
                    <strong>Limited Accuracy</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Predictions, medical diagnosis, ethical decisions</div>
                </div>
            </div>
        `,
        text: "Generative AI excels at creating human-like text, translations, and content based on prompts. However, it struggles with tasks requiring real-time data, complex reasoning, or specialized domain knowledge like medical diagnosis or stock market predictions."
    },
    4: {
        title: "Zero-Shot Learning Explained",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">🎯</div>
                    <strong>New Task</strong>
                    <div style="font-size: 12px; color: #666;">Never seen before</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">🧠</div>
                    <strong>Pre-trained Model</strong>
                    <div style="font-size: 12px; color: #666;">General knowledge</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">⚡</div>
                    <strong>Immediate Performance</strong>
                    <div style="font-size: 12px; color: #666;">No additional training</div>
                </div>
            </div>
        `,
        text: "Zero-shot learning is when an AI model can perform a task it has never been specifically trained for, using only its general knowledge and understanding. It's like asking someone to play a new board game - they can often figure it out using their general understanding of games and rules."
    },
    5: {
        title: "The Art of Prompt Engineering",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item">
                    <div style="font-size: 20px; margin-bottom: 8px;">😕</div>
                    <strong>Vague Prompt</strong>
                    <div style="font-size: 14px; margin-top: 8px;">"Write something about dogs"</div>
                    <div style="font-size: 12px; color: #666; margin-top: 4px;">→ Generic, unfocused output</div>
                </div>
                <div class="comparison-item highlight">
                    <div style="font-size: 20px; margin-bottom: 8px;">😊</div>
                    <strong>Specific Prompt</strong>
                    <div style="font-size: 14px; margin-top: 8px;">"Write a 200-word guide for first-time dog owners about house training"</div>
                    <div style="font-size: 12px; color: #666; margin-top: 4px;">→ Targeted, useful output</div>
                </div>
            </div>
        `,
        text: "Crafting effective prompts is challenging because you must clearly communicate context, tone, format, and specific requirements. The quality of AI output heavily depends on how well you can articulate what you want, including nuances and constraints."
    },
    6: {
        title: "Understanding Tokens in LLMs",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Text Tokenization Example</strong></div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"Hello"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" world"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"!"</span>
                    </div>
                    <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #666;">
                        3 tokens from "Hello world!"
                    </div>
                </div>
            </div>
        `,
        text: "Tokens are the basic units that language models process - they can be words, parts of words, or even punctuation. Models break down text into these digestible pieces to understand and generate language. Token limits determine how much text a model can process at once."
    },
    7: {
        title: "AGI vs Current AI Capabilities",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item">
                    <div style="font-size: 24px; margin-bottom: 8px;">🤖</div>
                    <strong>Current AI</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Specialized tasks, domain-specific, requires training</div>
                </div>
                <div class="comparison-item">
                    <div style="font-size: 24px; margin-bottom: 8px;">🧠</div>
                    <strong>AGI (Future)</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Human-level intelligence across all domains</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; padding: 16px; background: #fef3c7; border-radius: 8px; border: 1px solid #f59e0b;">
                <strong>❌ NOT required for AGI:</strong> Perfect prediction of future events
            </div>
        `,
        text: "Artificial General Intelligence (AGI) would match human cognitive abilities across all domains, but it doesn't require supernatural powers like perfect future prediction. Even humans can't predict the future with perfect accuracy - AGI is about general intelligence, not omniscience."
    },
    8: {
        title: "RAG: Enhancing LLMs with Fresh Data",
        visual: `
            <div class="flowchart">
                <div class="flow-step">❓ User Question</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Search External Database</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📄 Retrieve Relevant Documents</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🤖 LLM + Retrieved Info = Answer</div>
            </div>
        `,
        text: "Retrieval-Augmented Generation (RAG) enhances LLMs by connecting them to external, up-to-date databases. When you ask a question, RAG first searches for relevant information, then feeds both your question and the retrieved data to the LLM for a more accurate, current response."
    },
    9: {
        title: "Effective AI Prompting Strategies",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item highlight">
                    <div style="font-size: 20px; margin-bottom: 8px;">✅</div>
                    <strong>Effective Strategies</strong>
                    <div style="font-size: 14px; margin-top: 8px;">
                        • Target audience info<br>
                        • Unique selling points<br>
                        • Persuasive techniques
                    </div>
                </div>
                <div class="comparison-item">
                    <div style="font-size: 20px; margin-bottom: 8px;">❌</div>
                    <strong>Less Effective</strong>
                    <div style="font-size: 14px; margin-top: 8px;">
                        • Competitor product lists<br>
                        • Generic templates<br>
                        • Vague instructions
                    </div>
                </div>
            </div>
        `,
        text: "For marketing content, focus on providing context about your audience and desired outcomes rather than competitor information. AI works best when given clear direction about what you want to achieve, not what others are doing."
    },
    10: {
        title: "Maintaining AI System Accuracy",
        visual: `
            <div class="flowchart">
                <div class="flow-step">🔍 Identify Outdated Information</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📅 Schedule Regular Updates</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔄 Retrain with Current Data</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Improved Accuracy</div>
            </div>
        `,
        text: "AI systems become outdated as information changes. The most effective solution is proactive: regularly updating the training data with current information rather than reactive measures like feedback loops or human escalation."
    },
    11: {
        title: "RAG vs Regular Prompting",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item">
                    <div style="font-size: 20px; margin-bottom: 8px;">🤖</div>
                    <strong>Regular Prompting</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Limited to model's training knowledge</div>
                </div>
                <div class="comparison-item highlight">
                    <div style="font-size: 20px; margin-bottom: 8px;">🔍</div>
                    <strong>RAG</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Accesses specific information from your dataset</div>
                </div>
            </div>
        `,
        text: "RAG excels when you need specific information from your own datasets. While regular prompting relies on the model's general knowledge, RAG can pull exact details from different parts of your email dataset to answer specific questions."
    },
    12: {
        title: "Critical Thinking with AI Information",
        visual: `
            <div class="flowchart">
                <div class="flow-step">🤖 LLM Provides Information</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🤔 Apply Critical Thinking</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Cross-check with Reliable Sources</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Verified Information</div>
            </div>
        `,
        text: "LLM outputs should be treated like any other information source - useful but requiring verification. They're not inherently more or less trustworthy than internet sources; they're just another tool that requires critical evaluation and fact-checking."
    },
    13: {
        title: "LLM Knowledge Limitations",
        visual: `
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #dc2626;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="font-size: 32px;">📅</div>
                    <strong>Knowledge Cutoff</strong>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; margin-bottom: 8px;">Training Data: Up to specific date</div>
                    <div style="font-size: 14px; margin-bottom: 8px;">Real-time Data: ❌ Not available</div>
                    <div style="font-size: 14px;">Market Trends: ❌ May be outdated</div>
                </div>
            </div>
        `,
        text: "LLMs have a knowledge cutoff date - they can't access information beyond when they were last trained. This makes them unreliable for real-time information like current market trends, recent news, or live data."
    },
    14: {
        title: "Verifying AI-Generated Summaries",
        visual: `
            <div class="flowchart">
                <div class="flow-step">📄 AI Summary</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📚 Check Original Source</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Verify Claims & Context</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Reliable Information</div>
            </div>
        `,
        text: "Always cross-check AI summaries with original sources. AI can misinterpret, oversimplify, or miss important context. The primary source contains the complete, accurate information needed for academic work."
    },
    15: {
        title: "AI-Generated Media Detection",
        visual: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #f59e0b;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="font-size: 32px;">⚠️</div>
                    <strong>Deepfake Detection Challenge</strong>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; margin-bottom: 8px;">❌ Voice similarity doesn't guarantee authenticity</div>
                    <div style="font-size: 14px; margin-bottom: 8px;">❌ Professional quality can be faked</div>
                    <div style="font-size: 14px;">❌ High resolution doesn't prove it's real</div>
                    <div style="font-size: 16px; margin-top: 12px; font-weight: bold;">🎯 Advanced detection tools needed</div>
                </div>
            </div>
        `,
        text: "Modern AI can create highly convincing fake videos with accurate voices, professional quality, and smooth transitions. Visual and audio cues alone cannot confirm authenticity - specialized detection tools and verification methods are needed."
    },
    16: {
        title: "AI Bias in Hiring Systems",
        visual: `
            <div class="flowchart">
                <div class="flow-step">📊 Historical Hiring Data</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🤖 AI Training</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📋 Biased Screening</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">⚖️ Unfair Hiring Decisions</div>
            </div>
        `,
        text: "AI hiring systems can perpetuate historical biases present in training data. If past hiring decisions were biased against certain groups, the AI learns and replicates these patterns, leading to unfair screening of future applicants."
    },
    17: {
        title: "The Black Box Problem in AI",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📥</div>
                    <strong>Input</strong>
                    <div style="font-size: 12px; color: #666;">Patient Data</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box" style="background: #1f2937; color: white;">
                    <div style="font-size: 24px; margin-bottom: 8px;">❓</div>
                    <strong>Black Box</strong>
                    <div style="font-size: 12px; color: #ccc;">Unknown Process</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📤</div>
                    <strong>Output</strong>
                    <div style="font-size: 12px; color: #666;">Treatment Recommendation</div>
                </div>
            </div>
        `,
        text: "A 'black box' AI system produces outputs without explaining its reasoning process. This lack of transparency makes it difficult for professionals to trust and validate the AI's decisions, especially in critical fields like healthcare."
    },
    18: {
        title: "AI-Generated Content Copyright",
        visual: `
            <div class="flowchart">
                <div class="flow-step">🎨 AI Generates Image</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📋 Check Tool's License</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">⚖️ Understand Usage Rights</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Compliant Usage</div>
            </div>
        `,
        text: "AI-generated content copyright varies by platform and tool. Each AI service has different licensing terms - some allow commercial use, others don't. Always check the specific tool's policy before using generated content commercially."
    },
    19: {
        title: "AI Content Regulation",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item highlight">
                    <div style="font-size: 20px; margin-bottom: 8px;">🛡️</div>
                    <strong>Safety First</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Prevent harmful, misleading, or dangerous content</div>
                </div>
                <div class="comparison-item">
                    <div style="font-size: 20px; margin-bottom: 8px;">🚀</div>
                    <strong>Innovation</strong>
                    <div style="font-size: 14px; margin-top: 8px;">Balance restrictions with technological progress</div>
                </div>
            </div>
        `,
        text: "Restrictions on AI outputs are primarily justified by safety concerns - preventing the spread of harmful, misleading, or dangerous content. The challenge is balancing safety with innovation and freedom of expression."
    },
    20: {
        title: "Privacy Risks with Cloud AI",
        visual: `
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #dc2626;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="font-size: 32px;">🔓</div>
                    <strong>Privacy Risks</strong>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; margin-bottom: 8px;">⚠️ Data used for training</div>
                    <div style="font-size: 14px; margin-bottom: 8px;">⚠️ Possible information leakage</div>
                    <div style="font-size: 14px;">⚠️ Unencrypted processing</div>
                </div>
            </div>
        `,
        text: "Cloud-based AI tools pose privacy risks because they may use submitted data for training and can potentially output personal information from their training data. The probabilistic nature of AI means private information could be reconstructed or leaked."
    }
};
