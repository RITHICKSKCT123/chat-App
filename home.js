import React, { useState } from 'react';
import './home.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'Hello! How can I help you?' },
    { sender: 'User', text: 'Hi! I have a question.' },
  ]);

  const aiReplies = [
    "I'm sorry, I don't have that information.",
    "Let me look that up for you.",
    "How can I assist you today?",
  ];

  const handleSendMessage = (messageText, sender) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { sender, text: messageText },
      { sender: 'AI', text: generateAIReply() }
    ]);
  };

  const generateAIReply = () => {
    const randomIndex = Math.floor(Math.random() * aiReplies.length);
    return aiReplies[randomIndex];
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <span className="sender">{message.sender}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage(e.target.value, 'User');
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatPage;
