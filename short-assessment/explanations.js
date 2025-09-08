const explanations = {
    1: {
        title: "What is generative AI?",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <strong>Training data</strong>
                    <div>Text, images, audio</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <strong>AI model</strong>
                    <div>Learns patterns</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <strong>New content</strong>
                    <div>Generated output</div>
                </div>
            </div>
        `,
        text: "Generative AI refers to artificial intelligence that creates new content by learning patterns from existing data. Unlike traditional AI, which classifies or predicts, generative AI produces novel outputs such as text, images, music, or code."
    },
    2: {
        title: "How large language models work",
        visual: `
            <div class="flowchart">
                <div class="flow-step">Input: "The cat sat on the..."</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">Analyzes context and patterns</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">Predicts most likely next word</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">Output: "mat"</div>
            </div>
        `,
        text: "Large language models generate text by predicting the next word based on the context of previous words. They analyze patterns in language from large datasets to produce coherent and contextually appropriate text."
    },
    3: {
        title: "Generative AI's strengths and limitations",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item">
                    <strong>Strengths</strong>
                    <div>Text generation, language translation, content creation</div>
                </div>
                <div class="comparison-item">
                    <strong>Limitations</strong>
                    <div>Predictions, medical diagnosis, ethical decisions</div>
                </div>
            </div>
        `,
        text: "Generative AI excels at creating human-like text, translations, and content based on prompts. However, it struggles with tasks requiring real-time data, complex reasoning, or specialized domain knowledge."
    },
    4: {
        title: "The art of prompt engineering",
        visual: `
            <div class="comparison-grid">
                <div class="comparison-item">
                    <strong>Vague prompt</strong>
                    <div>"Write something about dogs"</div>
                </div>
                <div class="comparison-item">
                    <strong>Specific prompt</strong>
                    <div>"Write a 200-word guide for first-time dog owners about house training"</div>
                </div>
            </div>
        `,
        text: "Effective prompts clearly communicate context, tone, format, and specific requirements. The quality of AI output depends on how well you articulate your needs."
    },
    5: {
        title: "Understanding tokens in LLMs",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Text tokenization example</strong></div>
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
    6: {
        title: "RAG: Enhancing LLMs with fresh data",
        visual: `
            <div class="flowchart">
                <div class="flow-step">❓ User question</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Search external database</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📄 Retrieve relevant documents</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🤖 LLM + retrieved info = answer</div>
            </div>
        `,
        text: "Retrieval-Augmented Generation (RAG) enhances LLMs by connecting them to external, up-to-date databases. When you ask a question, RAG first searches for relevant information, then feeds both your question and the retrieved data to the LLM for a more accurate, current response."
    },
    7: {
        title: "Critical thinking with AI information",
        visual: `
            <div class="flowchart">
                <div class="flow-step">🤖 LLM provides information</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🤔 Apply critical thinking</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Cross-check with reliable sources</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Verified information</div>
            </div>
        `,
        text: "LLM outputs should be treated like any other information source - useful but requiring verification. They're not inherently more or less trustworthy than internet sources; they're just another tool that requires critical evaluation and fact-checking."
    },
    8: {
        title: "Verifying AI-generated summaries",
        visual: `
            <div class="flowchart">
                <div class="flow-step">📄 AI summary</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">📚 Check original source</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">🔍 Verify claims & context</div>
                <div style="font-size: 20px;">⬇️</div>
                <div class="flow-step">✅ Reliable information</div>
            </div>
        `,
        text: "Always cross-check AI summaries with original sources. AI can misinterpret, oversimplify, or miss important context. The primary source contains the complete, accurate information needed for academic work."
    },
    9: {
        title: "The black box problem in AI",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📥</div>
                    <strong>Input</strong>
                    <div style="font-size: 12px; color: #666;">Patient data</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box" style="background: #1f2937; color: white;">
                    <div style="font-size: 24px; margin-bottom: 8px;">❓</div>
                    <strong>Black box</strong>
                    <div style="font-size: 12px; color: #ccc;">Unknown process</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📤</div>
                    <strong>Output</strong>
                    <div style="font-size: 12px; color: #666;">Treatment recommendation</div>
                </div>
            </div>
        `,
        text: "A 'black box' AI system produces outputs without explaining its reasoning process. This lack of transparency makes it difficult for professionals to trust and validate the AI's decisions, especially in critical fields like healthcare."
    }
};
