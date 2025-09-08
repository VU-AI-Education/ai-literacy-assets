// Function to create topic cards
function createTopicCards() {
    const topicGrid = document.getElementById('topicGrid');
    
    Object.entries(explanations).forEach(([id, content]) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => showConceptDetail(id);
        
        const title = document.createElement('h3');
        title.textContent = content.title;
        
        // Create a preview of the text
        const preview = document.createElement('p');
        preview.textContent = content.text.substring(0, 100) + '...';
        
        card.appendChild(title);
        card.appendChild(preview);
        topicGrid.appendChild(card);
    });
}

// Function to show concept detail
function showConceptDetail(id) {
    const concept = explanations[id];
    const detailElement = document.getElementById('conceptDetail');
    
    document.getElementById('conceptTitle').textContent = concept.title;
    document.getElementById('conceptVisual').innerHTML = concept.visual;
    document.getElementById('conceptText').textContent = concept.text;
    
    detailElement.classList.add('active');
}

// Function to close concept detail
function closeDetail() {
    const detailElement = document.getElementById('conceptDetail');
    detailElement.classList.remove('active');
}

// Close detail view when clicking outside the content
document.getElementById('conceptDetail').addEventListener('click', (e) => {
    if (e.target.id === 'conceptDetail') {
        closeDetail();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', createTopicCards);
