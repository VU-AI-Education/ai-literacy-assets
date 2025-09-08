const explanations = {
    1: {
        title: "What is Generative AI?",
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
            <div class="concept-diagram vertical">
                <div class="concept-box">
                    <strong>Learning phase</strong>
                    <div class="llm-example">
                        <div>• The cat sat on the mat</div>
                        <div>• The dog lay on the rug</div>
                        <div>• The baby crawled on the floor</div>
                    </div>
                    <div class="note">Trained on many text examples</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box">
                    <strong>User input</strong>
                    <div class="llm-input">"The cat sat on the ___"</div>
                    <div class="note">Model receives incomplete text</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box">
                    <strong>Model's prediction</strong>
                    <div class="llm-prediction">
                        <div>Most likely: "mat" (70%)</div>
                        <div>Alternative: "floor" (20%)</div>
                        <div>Alternative: "rug" (10%)</div>
                    </div>
                    <div class="note">Predicts based on patterns learned</div>
                </div>
            </div>
        `,
        text: "Large language models work by learning patterns from vast amounts of text data. When given an incomplete piece of text, they analyze the context and predict what word would most likely come next, based on similar patterns they've seen during training."
    },
    3: {
        title: "Generative AI's strengths and limitations",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box concept-box-success">
                    <strong>Strengths</strong>
                    <div>• Text generation</div>
                    <div>• Language translation</div>
                    <div>• Content creation</div>
                    <div class="note">Best suited for these tasks</div>
                </div>
                <div class="concept-spacer"></div>
                <div class="concept-box concept-box-warning">
                    <strong>Limitations</strong>
                    <div>• Complex reasoning</div>
                    <div>• Real-time data</div>
                    <div>• Domain expertise</div>
                    <div class="note">Avoid relying on AI for these</div>
                </div>
            </div>
        `,
        text: "Generative AI excels at creating human-like text, translations, and content based on prompts. However, it struggles with tasks requiring real-time data, complex reasoning, or specialized domain knowledge."
    },
    4: {
        title: "The art of prompt engineering",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box concept-box-warning">
                    <strong>Ineffective prompt</strong>
                    <div>"Write about dogs"</div>
                    <div class="note">❌ Vague, lacks direction</div>
                </div>
                <div class="concept-spacer"></div>
                <div class="concept-box concept-box-success">
                    <strong>Effective prompt</strong>
                    <div>"Write a 200-word guide</div>
                    <div>for first-time dog owners</div>
                    <div>about house training"</div>
                    <div class="note">✓ Specific and structured</div>
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
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"Take"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" two"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" para"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"cet"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"am"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"ol"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" tablet"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"s"</span>
                    </div>
                    <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #666;">
                        8 tokens from "Take two paracetamol tablets"
                    </div>
                </div>
            </div>
        `,
        text: "Tokens are the basic units that language models process - they can be parts of words, full words, or even punctuation. For example, in the sentence 'Take two paracetamol tablets', some words are single tokens while 'paracetamol' is split into multiple tokens as the model recognizes common subword patterns. This helps the model understand and process text more efficiently, while token limits determine how much text it can handle at once."
    },
    6: {
        title: "RAG: Enhancing LLMs with fresh data",
        visual: `
            <div class="concept-diagram vertical">
                <div class="concept-box">
                    <strong>1. User Question</strong>
                    <div>"What are the side effects of paracetamol?"</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box concept-box-dark" style="width: 100%;">
                    <strong>2. Enhanced LLM Process</strong>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; color: #d1d5db;">
                        <div style="text-align: left; padding: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 4px;">
                            <strong style="color: #e5e7eb;">Search phase:</strong>
                            <div>• Check medical databases</div>
                            <div>• Find research papers</div>
                            <div>• Get official guidelines</div>
                        </div>
                        <div style="text-align: left; padding: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 4px;">
                            <strong style="color: #e5e7eb;">Processing phase:</strong>
                            <div>• Combine relevant information</div>
                            <div>• Format for readability</div>
                            <div>• Add source references</div>
                        </div>
                    </div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box concept-box-success" style="width: 100%;">
                    <strong>3. Enhanced Answer</strong>
                    <div style="text-align: left; margin-top: 0.5rem;">
                        <div>• Common side effects include...</div>
                        <div>• According to NHS guidelines...</div>
                        <div>• Recent studies show...</div>
                        <div class="note">Answer includes current, verified information with sources</div>
                    </div>
                </div>
            </div>
        `,
        text: "Retrieval-Augmented Generation (RAG) enhances LLMs by connecting them to external, up-to-date databases. When you ask a question, RAG first searches for relevant information, then feeds both your question and the retrieved data to the LLM for a more accurate, current response."
    },
    7: {
        title: "Critical thinking with AI information",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Evaluating AI-generated content</strong></div>
                    
                    <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                        <div style="flex: 1; background: #fef2f2; padding: 12px; border-radius: 6px; border: 1px solid #dc2626;">
                            <div style="font-weight: bold; color: #dc2626; margin-bottom: 8px;">❌ Don't just accept</div>
                            <div style="font-size: 14px; color: #666;">
                                • Taking AI output as fact<br>
                                • Using without verification<br>
                                • Ignoring source material
                            </div>
                        </div>
                        
                        <div style="flex: 1; background: #ecfdf5; padding: 12px; border-radius: 6px; border: 1px solid #059669;">
                            <div style="font-weight: bold; color: #059669; margin-bottom: 8px;">✓ Critical approach</div>
                            <div style="font-size: 14px; color: #666;">
                                • Check primary sources<br>
                                • Verify key claims<br>
                                • Consider biases
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #666;">
                        Treat AI as a helpful but fallible assistant
                    </div>
                </div>
            </div>
        `,
        text: "LLM outputs should be treated like any other information source - useful but requiring verification. They're not inherently more or less trustworthy than internet sources; they're just another tool that requires critical evaluation and fact-checking."
    },
    8: {
        title: "Verifying AI-generated summaries",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Finding Primary Sources</strong></div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">1</div>
                                <div style="flex-grow: 1;">
                                    <strong>Look for citations</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Find quoted text in the AI response<br>
                                        • Note author names and publication years<br>
                                        • Search for mentioned journal names
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">2</div>
                                <div style="flex-grow: 1;">
                                    <strong>Use academic databases</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Google Scholar<br>
                                        • University library<br>
                                        • Field-specific databases
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">3</div>
                                <div style="flex-grow: 1;">
                                    <strong>Verify authenticity</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Check official websites<br>
                                        • Confirm publication dates<br>
                                        • Look for peer review status
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 16px; font-size: 14px; color: #666; padding-top: 12px; border-top: 1px solid #e5e7eb;">
                        Always read the original sources to ensure accuracy and context
                    </div>
                </div>
            </div>
        `,
        text: "Always cross-check AI summaries with original sources. AI can misinterpret, oversimplify, or miss important context. The primary source contains the complete, accurate information needed for academic work."
    },
    9: {
        title: "The black box problem in AI",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <strong>Input</strong>
                    <div>Patient data</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box concept-box-dark">
                    <strong>Black Box Process</strong>
                    <div>Unknown reasoning</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <strong>Output</strong>
                    <div>Treatment plan</div>
                </div>
            </div>
        `,
        text: "A 'black box' AI system produces outputs without explaining its reasoning process. This lack of transparency makes it difficult for professionals to trust and validate the AI's decisions, especially in critical fields like healthcare."
    }
};
