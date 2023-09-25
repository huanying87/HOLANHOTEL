document.addEventListener("DOMContentLoaded", () => {
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatInput = document.querySelector(".chat-input textarea");
    const chatbox = document.querySelector(".chatbox");
  
    let userMessage;
    const API_KEY = "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";
  
    // Create a chat <li> element with passed message and className
    const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      let chatContent =
        className === "outgoing"
          ? `<p>${message}</p>`
          : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
      chatLi.innerHTML = chatContent;
      return chatLi;
    };
  
    const generateResponse = (incomingChatLi) => {
      const API_URL = "https://api.openai.com/v1/chat/completions";
      const messageElement = incomingChatLi.querySelector("p");
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        }),
      };
  
      // Send POST request to API, get response
      fetch(API_URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          messageElement.textContent = data.choices[0].message.content;
        })
        .catch((error) => {
          messageElement.textContent =
            "Oops! Something went wrong. Please try again.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
    };
  
    const handleChat = () => {
      userMessage = chatInput.value.trim();
      if (!userMessage) return;
  
      // Append the user's message to the chatbox
      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);
  
      setTimeout(() => {
        // Display Thinking... message while waiting for a response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
      }, 600);
      
      // Clear the textarea after sending the message
      chatInput.value = "";
    };
  
    // Listen for the "keydown" event on the textarea
    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default Enter key behavior (line break)
        handleChat();
      }
    });
  
    // Listen for clicks on the send button
    sendChatBtn.addEventListener("click", handleChat);
  });
  