function sendMessage() {

    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();

    if(message === ""){
        return;
    }

    let chatBox = document.getElementById("chatBox");

    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerHTML = `<span>${message}</span>`;
    chatBox.appendChild(userDiv);

    let botResponse = getBotResponse(message);

    let botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.innerHTML = `<span>${botResponse}</span>`;
    chatBox.appendChild(botDiv);

    inputField.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message){

    message = message.toLowerCase();

    if(message.includes("hello")){
        return "Hello! How can I help you?";
    }

    if(message.includes("hi")){
        return "Hi! Nice to meet you.";
    }

    if(message.includes("project")){
        return "Your project is Language Agnostic Chatbot.";
    }

    if(message.includes("bye")){
        return "Goodbye! Have a great day.";
    }

    return "I received your message: " + message;
}
