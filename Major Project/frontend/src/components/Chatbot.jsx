import React, { useEffect } from 'react';
import './Chatbot.css'; // Import custom styles if needed

const ChatbotComponent = () => {
  useEffect(() => {
    // Create a script element for the chatbot
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('chatbotId', 'pDDTbmwiIAsw0cM1oYW-3');
    script.setAttribute('domain', 'www.chatbase.co');

    // Create the embeddedChatbotConfig script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "pDDTbmwiIAsw0cM1oYW-3",
        domain: "www.chatbase.co"
      };
    `;

    // Append both scripts to the document body
    document.body.appendChild(configScript);
    document.body.appendChild(script);

    // Clean up the scripts on component unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id="chatbot-container"></div>;
};

export default ChatbotComponent;
