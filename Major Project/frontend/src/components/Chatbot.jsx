// src/Chatbot.js
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const botpressScript1 = document.createElement('script');
    botpressScript1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    botpressScript1.async = true;
    document.body.appendChild(botpressScript1);

    const botpressScript2 = document.createElement('script');
    botpressScript2.src = 'https://files.bpcontent.cloud/2024/10/21/13/20241021134404-RFJ3D9IQ.js';
    botpressScript2.async = true;
    document.body.appendChild(botpressScript2);

    botpressScript1.onload = () => {
      window.botpressWebChat.init({
        host: "https://YOUR_BOTPRESS_INSTANCE_URL", // Replace with your Botpress instance URL
        botId: "YOUR_BOT_ID", // Replace with your Bot ID
        botName: "My Chatbot", // Customize your bot name
        style: {
          // You can customize additional styles here if needed
        },
      });
    };
  }, []);

  return (
    <div id="chatbot" className="chatbot" style={chatbotStyle}></div>
  );
};

// Chatbot style to position it at the bottom right
const chatbotStyle = {
  position: 'fixed',
  bottom: '20px',      // Distance from the bottom
  right: '20px',       // Distance from the right
  zIndex: 1000,        // Ensure it is above other content
};

export default Chatbot;
