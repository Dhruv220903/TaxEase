import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const apiUrl = "https://openai-service-agri.openai.azure.com/openai/deployments/gpt-35-turbo-16k/chat/completions?api-version=2024-08-01-preview";
  const apiKey = "8cfba0a0c4954c5cb90215801f5c2a6e";  // Replace with your Azure OpenAI API key

  // Function to send the message and get the response
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Display user message
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    const messagesToSend = [
      { role: 'system', content: 'You are a virtual assistant to a Chartered Accountant in India, specializing in income tax, accounting, and financial regulations. You should only answer queries related to income tax laws, tax planning, deductions, exemptions, filing procedures, and accounting practices specific to India. For questions outside of these areas, you should politely inform the user that you only handle tax and accounting-related matters.' },
      { role: 'user', content: inputMessage }
    ];

    const requestPayload = {
      model: "gpt-35-turbo-16k",
      messages: messagesToSend
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify(requestPayload)
      });

      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      // Display bot response
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error communicating with Azure OpenAI:', error);
      setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I couldn't process your request at the moment.", sender: 'bot' }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {isOpen && (
        <div className="mt-2 w-80 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-t-lg">
            <h2 className="text-lg font-semibold">Taxo Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl leading-none hover:text-gray-200"
            >
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100" style={{ maxHeight: '300px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-b-lg">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
