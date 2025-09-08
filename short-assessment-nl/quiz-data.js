const quizData = [
    {
        id: 1,
        question: "Welke van de volgende beschrijvingen past het beste bij \"generatieve AI\"?",
        options: [
            "AI die nieuwe content zoals tekst, afbeeldingen of muziek creëert door te leren van bestaande data.",
            "Een AI-systeem ontworpen om de snelheid en nauwkeurigheid van data-ophaling in zoekmachines te verbeteren.",
            "Een vorm van kunstmatige intelligentie die zich richt op het vertalen van talen in realtime.",
            "AI-technologie die voornamelijk wordt gebruikt voor het beheren en organiseren van grote databases."
        ],
        correct: 0
    },
    {
        id: 2,
        question: "Welke van de volgende uitspraken beschrijft een LLM (Large Language Model) het beste?",
        options: [
            "Het genereert tekst door grote hoeveelheden webcontent te analyseren en samen te vatten.",
            "Het genereert tekst door het volgende woord te voorspellen op basis van de context van voorgaande woorden.",
            "Het genereert tekst door invoertekst gelijktijdig in meerdere talen te vertalen.",
            "Het genereert tekst door vooraf gedefinieerde sjablonen te gebruiken en de lege plekken in te vullen."
        ],
        correct: 1
    },
    {
        id: 3,
        question: "Welke van de volgende taken kan generatieve AI met een hoge mate van nauwkeurigheid uitvoeren?",
        options: [
            "Het voorspellen van beurskoersen",
            "Het nemen van ethische beslissingen in complexe scenario's",
            "Het diagnosticeren van zeldzame ziekten",
            "Het genereren van mensachtige tekst op basis van prompts"
        ],
        correct: 3
    },
    {
        id: 4,
        question: "Wat is een potentiële uitdaging bij het gebruik van prompt-gebaseerde ontwikkeling voor tekstgeneratie?",
        options: [
            "Het taalmodel kan alleen binaire uitvoer genereren.",
            "De noodzaak voor uitgebreide gelabelde trainingsdata.",
            "Het opstellen van een prompt die de gewenste context en nuances nauwkeurig weergeeft.",
            "De vereiste voor complexe feature engineering."
        ],
        correct: 2
    },
    {
        id: 5,
        question: "Waar verwijst de term \"token\" naar in de context van een large language model (LLM)?",
        options: [
            "Een token is een eenheid van tekst, zoals een woord of deel van een woord, die het model individueel verwerkt.",
            "Een token is een unieke identificatie toegewezen aan elke gebruiker die met het taalmodel interacteert.",
            "Een token is een beveiligingsmaatregel gebruikt voor het authenticeren van API-verzoeken aan het taalmodel.",
            "Een token is een beloning gegeven aan gebruikers voor het bijdragen van waardevolle data aan het trainen van het taalmodel."
        ],
        correct: 0
    },
    {
        id: 6,
        question: "Hoe verbetert RAG (Retrieval-Augmented Generation) de mogelijkheden van een LLM?",
        options: [
            "Door de grammatica en syntax te verbeteren.",
            "Door realtime en relevante data te verstrekken.",
            "Door de rekenkracht te vergroten.",
            "Door het mogelijk te maken meerdere talen te begrijpen."
        ],
        correct: 1
    },
    {
        id: 7,
        question: "Hoe moet je als student omgaan met de informatie die een Large Language Model (LLM) verstrekt bij het verzamelen van informatie voor een opdracht?",
        options: [
            "De antwoorden van het LLM zijn altijd betrouwbaarder dan informatie die je op internet vindt, dus je kunt ze zonder verdere verificatie gebruiken.",
            "De antwoorden van het LLM zijn over het algemeen betrouwbaarder dan internetbronnen, maar je moet de informatie nog wel verifiëren met andere betrouwbare bronnen.",
            "De antwoorden van het LLM zijn niet per se betrouwbaarder dan internetbronnen, en je moet de informatie controleren met andere geloofwaardige referenties.",
            "De antwoorden van het LLM zijn minder betrouwbaar dan internetbronnen omdat het vertrouwt op verouderde informatie."
        ],
        correct: 2
    },
    {
        id: 8,
        question: "Een generatieve AI-tool heeft een samenvatting van een onderzoekspaper gegeven. De samenvatting stelt: \"Het onderzoek toonde aan dat verhoogde schermtijd direct gecorreleerd is met verminderde aandachtsspanne bij kinderen van 8-12 jaar.\" Wat is je volgende stap?",
        options: [
            "De samenvatting als accuraat accepteren omdat AI-tools over het algemeen betrouwbaar zijn.",
            "De AI vragen om meer details over de methodologie en resultaten van het onderzoek.",
            "De samenvatting controleren met het originele onderzoekspaper.",
            "Een andere AI-tool gebruiken om een samenvatting te genereren en de consistentie tussen beide samenvattingen evalueren."
        ],
        correct: 2
    },
    {
        id: 9,
        question: "In een gezondheidszorg-startup beveelt een accuraat AI-model behandelingen aan, maar artsen vertrouwen het niet omdat ze niet kunnen begrijpen hoe het model tot zijn conclusies komt. Welk kernprobleem illustreert dit scenario?",
        options: [
            "Het AI-model gebruikt verouderde trainingsdata.",
            "De trainingsdata mist voldoende diversiteit.",
            "De ingevoerde behandelingsrichtlijnen zijn incorrect.",
            "Het AI-model gedraagt zich als een black box."
        ],
        correct: 3
    }
];
