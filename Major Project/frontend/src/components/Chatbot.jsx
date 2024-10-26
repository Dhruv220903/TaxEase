import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    botpressScript.onload = () => {
      window.botpressWebChat.init({
        host: "https://YOUR_INSTANCE_NAME.botpress.cloud", // Replace with your actual Botpress instance URL
        botId: "TaxMaster", // Make sure this is the correct bot ID
        botName: "TaxMaster", // Customize your bot name
        style: {
          // Additional style customization can go here if needed
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
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
};

export default Chatbot;
