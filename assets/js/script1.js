// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        chatbotWindow.style.display = "block";
        console.log("Chatbot window opened");
    } else {
        chatbotWindow.style.display = "none";
        console.log("Chatbot window closed");
    }
}

// Send user message and get AI response
async function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        const userInput = document.getElementById("userInput").value.trim();
        if (userInput === "") return;

        // Display user message
        displayMessage(userInput, "user");

        // Clear input
        document.getElementById("userInput").value = "";

        // Fetch AI response
        const response = await getAIResponse(userInput);
        displayMessage(response, "bot");
    }
}

// Display message in chatbot
function displayMessage(message, sender) {
    const messagesContainer = document.getElementById("chatbotMessages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chatbot-message", sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
}

// Fetch response from OpenAI API
async function getAIResponse(message) {
    try {
        const apiKey = "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";  // Replace with your actual OpenAI API key
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();

        // Check if response contains an answer
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error("Unexpected response format from OpenAI API.");
        }
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return "Sorry, I couldn't process that request at the moment. Please try again later.";
    }
}
