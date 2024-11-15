// Chatbot functionality
document.getElementById('chatbotButton').onclick = function() {
    document.getElementById('chatbox').style.display = 'block';
};

document.getElementById('closeButton').onclick = function() {
    document.getElementById('chatbox').style.display = 'none';
};

// Send user input and get AI response
document.getElementById('sendButton').onclick = async function() {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput) {
        // Display user message
        const chatHistory = document.getElementById('chatHistory');
        chatHistory.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

        // Call OpenAI API (replace 'your-api-key' with your OpenAI API key)
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer your-api-key`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
                max_tokens: 100
            })
        });
        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        // Display AI response
        chatHistory.innerHTML += `<div><strong>AI:</strong> ${aiMessage}</div>`;
        document.getElementById('userInput').value = ''; // Clear input
    }
};
