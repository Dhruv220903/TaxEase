import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Dynamically creating the script for embedding the Chatling chatbot
    const script = document.createElement('script');
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.id = "chatling-embed-script";
    script.setAttribute('data-id', '5866982513');
    document.body.appendChild(script);

    // Creating the chatbot config script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.chtlConfig = { chatbotId: "5866982513" };
    `;
    document.body.appendChild(configScript);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return null; // No need to render anything, the script injects the chatbot
};

export default Chatbot;
