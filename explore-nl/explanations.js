const explanations = {
    1: {
        title: "Wat is generatieve AI?",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <strong>Trainingsdata</strong>
                    <div>Tekst, afbeeldingen, audio</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <strong>AI model</strong>
                    <div>Leert patronen</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <strong>Nieuwe inhoud</strong>
                    <div>Gegenereerde output</div>
                </div>
            </div>
        `,
        text: "Generatieve AI verwijst naar kunstmatige intelligentie die nieuwe inhoud creëert door patronen te leren uit bestaande data. In tegenstelling tot traditionele AI, die classificeert of voorspelt, produceert generatieve AI nieuwe output zoals tekst, afbeeldingen, muziek of code."
    },
    2: {
        title: "Hoe werken grote taalmodellen",
        visual: `
            <div class="concept-diagram vertical">
                <div class="concept-box">
                    <strong>Leerfase</strong>
                    <div class="llm-example">
                        <div>• De kat zit op de mat</div>
                        <div>• De hond ligt op het kleed</div>
                        <div>• De baby kruipt op de vloer</div>
                    </div>
                    <div class="note">Getraind op veel tekstvoorbeelden</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box">
                    <strong>Gebruikersinvoer</strong>
                    <div class="llm-input">"De kat zit op de ___"</div>
                    <div class="note">Model ontvangt onvolledige tekst</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box">
                    <strong>Voorspelling model</strong>
                    <div class="llm-prediction">
                        <div>Meest waarschijnlijk: "mat" (70%)</div>
                        <div>Alternatief: "vloer" (20%)</div>
                        <div>Alternatief: "kleed" (10%)</div>
                    </div>
                    <div class="note">Voorspelt op basis van geleerde patronen</div>
                </div>
            </div>
        `,
        text: "Grote taalmodellen werken door patronen te leren uit enorme hoeveelheden tekstdata. Wanneer ze een onvolledige tekst krijgen, analyseren ze de context en voorspellen ze welk woord het meest waarschijnlijk volgt, gebaseerd op vergelijkbare patronen die ze tijdens de training hebben gezien."
    },
    3: {
        title: "Sterke en zwakke punten van generatieve AI",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box concept-box-success">
                    <strong>Sterke punten</strong>
                    <div>• Tekstgeneratie</div>
                    <div>• Taalvertaling</div>
                    <div>• Content creatie</div>
                    <div class="note">Geschikt voor deze taken</div>
                </div>
                <div class="concept-spacer"></div>
                <div class="concept-box concept-box-warning">
                    <strong>Beperkingen</strong>
                    <div>• Complex redeneren</div>
                    <div>• Real-time data</div>
                    <div>• Domeinexpertise</div>
                    <div class="note">Vermijd AI voor deze taken</div>
                </div>
            </div>
        `,
        text: "Generatieve AI blinkt uit in het creëren van mensachtige tekst, vertalingen en content op basis van prompts. Het heeft echter moeite met taken die real-time data, complex redeneren of gespecialiseerde domeinkennis vereisen."
    },
    4: {
        title: "De kunst van prompt engineering",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box concept-box-warning">
                    <strong>Ineffectieve prompt</strong>
                    <div>"Schrijf iets over honden"</div>
                    <div class="note">❌ Vaag, mist richting</div>
                </div>
                <div class="concept-spacer"></div>
                <div class="concept-box concept-box-success">
                    <strong>Effectieve prompt</strong>
                    <div>"Schrijf een gids van 200 woorden</div>
                    <div>voor nieuwe hondeneigenaren</div>
                    <div>over zindelijkheidstraining"</div>
                    <div class="note">✓ Specifiek en gestructureerd</div>
                </div>
            </div>
        `,
        text: "Effectieve prompts communiceren duidelijk de context, toon, format en specifieke vereisten. De kwaliteit van de AI-output hangt af van hoe goed je je wensen kunt formuleren."
    },
    5: {
        title: "Tokens begrijpen in taalmodellen",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Tekst tokenization voorbeeld</strong></div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"Neem"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" twee"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" para"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"cet"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"am"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"ol"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">" tablet"</span>
                        <span style="background: #e0f2fe; padding: 4px 8px; border-radius: 4px; border: 1px solid #0ea5e9;">"ten"</span>
                    </div>
                    <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #666;">
                        8 tokens uit "Neem twee paracetamol tabletten"
                    </div>
                </div>
            </div>
        `,
        text: "Tokens zijn de basiseenheden die taalmodellen verwerken - ze kunnen delen van woorden, hele woorden of zelfs leestekens zijn. In de zin 'Neem twee paracetamol tabletten' zijn sommige woorden enkele tokens, terwijl 'paracetamol' wordt opgesplitst in meerdere tokens omdat het model vaak voorkomende woorddelen herkent. Dit helpt het model om tekst efficiënt te verwerken."
    },
    6: {
        title: "RAG: Taalmodellen verrijken met actuele data",
        visual: `
            <div class="concept-diagram vertical">
                <div class="concept-box">
                    <strong>1. Gebruikersvraag</strong>
                    <div>"Wat zijn de bijwerkingen van paracetamol?"</div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box concept-box-dark" style="width: 100%;">
                    <strong>2. Verbeterd LLM Proces</strong>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; color: #d1d5db;">
                        <div style="text-align: left; padding: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 4px;">
                            <strong style="color: #e5e7eb;">Zoekfase:</strong>
                            <div>• Controleer medische databases</div>
                            <div>• Zoek wetenschappelijke artikelen</div>
                            <div>• Raadpleeg officiële richtlijnen</div>
                        </div>
                        <div style="text-align: left; padding: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 4px;">
                            <strong style="color: #e5e7eb;">Verwerkingsfase:</strong>
                            <div>• Combineer relevante informatie</div>
                            <div>• Format voor leesbaarheid</div>
                            <div>• Voeg bronverwijzingen toe</div>
                        </div>
                    </div>
                </div>
                <div class="concept-arrow">↓</div>
                <div class="concept-box concept-box-success" style="width: 100%;">
                    <strong>3. Verbeterd Antwoord</strong>
                    <div style="text-align: left; margin-top: 0.5rem;">
                        <div>• Veelvoorkomende bijwerkingen zijn...</div>
                        <div>• Volgens de bijsluiter van het CBG...</div>
                        <div>• Recent onderzoek toont aan...</div>
                        <div class="note">Antwoord bevat actuele, geverifieerde informatie met bronnen</div>
                    </div>
                </div>
            </div>
        `,
        text: "Retrieval-Augmented Generation (RAG) verbetert taalmodellen door ze te verbinden met externe, actuele databases. Wanneer je een vraag stelt, zoekt RAG eerst naar relevante informatie en combineert vervolgens je vraag met de gevonden data voor een nauwkeuriger en actueler antwoord."
    },
    7: {
        title: "Kritisch denken bij AI-informatie",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>AI-gegenereerde content evalueren</strong></div>
                    
                    <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                        <div style="flex: 1; background: #fef2f2; padding: 12px; border-radius: 6px; border: 1px solid #dc2626;">
                            <div style="font-weight: bold; color: #dc2626; margin-bottom: 8px;">❌ Niet doen</div>
                            <div style="font-size: 14px; color: #666;">
                                • AI output als feit aannemen<br>
                                • Gebruiken zonder verificatie<br>
                                • Bronmateriaal negeren
                            </div>
                        </div>
                        
                        <div style="flex: 1; background: #ecfdf5; padding: 12px; border-radius: 6px; border: 1px solid #059669;">
                            <div style="font-weight: bold; color: #059669; margin-bottom: 8px;">✓ Kritische aanpak</div>
                            <div style="font-size: 14px; color: #666;">
                                • Controleer primaire bronnen<br>
                                • Verifieer belangrijke claims<br>
                                • Let op vooroordelen
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #666;">
                        Behandel AI als een behulpzame maar feilbare assistent
                    </div>
                </div>
            </div>
        `,
        text: "AI-output moet net als elke andere informatiebron worden behandeld - nuttig maar verificatie vereist. Ze zijn niet inherent meer of minder betrouwbaar dan internetbronnen. Het is gewoon een ander hulpmiddel dat kritische evaluatie en feitencontrole nodig heeft."
    },
    8: {
        title: "AI-gegenereerde samenvattingen verifiëren",
        visual: `
            <div class="visual-component">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9;">
                    <div style="font-size: 18px; margin-bottom: 16px; text-align: center;"><strong>Primaire bronnen vinden</strong></div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">1</div>
                                <div style="flex-grow: 1;">
                                    <strong>Zoek naar citaten</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Vind geciteerde tekst in het AI-antwoord<br>
                                        • Let op auteursnamen en publicatiejaren<br>
                                        • Zoek naar genoemde tijdschriften
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">2</div>
                                <div style="flex-grow: 1;">
                                    <strong>Gebruik academische databases</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Google Scholar<br>
                                        • Universiteitsbibliotheek<br>
                                        • Vakspecifieke databases
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #0ea5e9;">
                            <div style="display: flex; gap: 8px;">
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: bold;">3</div>
                                <div style="flex-grow: 1;">
                                    <strong>Verifieer authenticiteit</strong>
                                    <div style="font-size: 14px; color: #666; margin-top: 4px;">
                                        • Controleer officiële websites<br>
                                        • Bevestig publicatiedata<br>
                                        • Kijk naar peer review status
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 16px; font-size: 14px; color: #666; padding-top: 12px; border-top: 1px solid #e5e7eb;">
                        Lees altijd de originele bronnen voor nauwkeurigheid en context
                    </div>
                </div>
            </div>
        `,
        text: "Controleer altijd AI-samenvattingen met originele bronnen. AI kan verkeerd interpreteren, te veel vereenvoudigen of belangrijke context missen. De primaire bron bevat de volledige, accurate informatie die nodig is voor academisch werk."
    },
    9: {
        title: "Het black box probleem in AI",
        visual: `
            <div class="concept-diagram">
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📥</div>
                    <strong>Input</strong>
                    <div style="font-size: 12px; color: #666;">Patiëntgegevens</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box" style="background: #1f2937; color: white;">
                    <div style="font-size: 24px; margin-bottom: 8px;">❓</div>
                    <strong>Black box</strong>
                    <div style="font-size: 12px; color: #ccc;">Onbekend proces</div>
                </div>
                <div class="concept-arrow">→</div>
                <div class="concept-box">
                    <div style="font-size: 24px; margin-bottom: 8px;">📤</div>
                    <strong>Output</strong>
                    <div style="font-size: 12px; color: #666;">Behandeladvies</div>
                </div>
            </div>
        `,
        text: "Een 'black box' AI-systeem produceert output zonder zijn redeneerproces uit te leggen. Dit gebrek aan transparantie maakt het moeilijk voor professionals om de AI-beslissingen te vertrouwen en te valideren, vooral in kritieke velden zoals de gezondheidszorg."
    }
};
