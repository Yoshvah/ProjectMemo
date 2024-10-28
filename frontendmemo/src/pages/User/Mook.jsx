import React, { useState } from 'react';
import '../../Styles/Mook.css';

const Mook = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [attributes, setAttributes] = useState([{ key: '', value: '' }]);
  const [cards, setCards] = useState([
    {
      title: "Farmstand Salad",
      image: "https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg",
      description: "A mixture of leafy greens and seasonal vegetables from the farmer's market.",
      price: 9,
      attributes: [
        { key: "Dressing", value: "housemade ranch" },
        { key: "Extras", value: "Add protein for $2" },
      ],
    },
  ]);

  // Chat toggle
  const toggleChat = () => setShowChat(!showChat);

  // Handle chat messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      sender: 'user',
      text: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: `AI says: You said "${userMessage.text}"`,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  // Modal handlers
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Add card attributes
  const handleAddAttribute = () =>
    setAttributes([...attributes, { key: '', value: '' }]);

  const handleAttributeChange = (index, key, value) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index] = { ...updatedAttributes[index], [key]: value };
    setAttributes(updatedAttributes);
  };

  // Save new card
  const handleSaveCard = () => {
    setCards([
      ...cards,
      { title: newTitle, attributes, image: '', description: '', price: '' },
    ]);
    setNewTitle('');
    setAttributes([{ key: '', value: '' }]);
    closeModal();
  };

  return (
    <div className="main">
      {/* Button to add a new card */}
      <div className="button-container">
        <button className="btn btn-outline-dark" onClick={openModal}>
          Add New Item
        </button>
      </div>

      {/* Dynamic card list */}
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index} className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={card.image} alt="Food item" />
                <span className="card_price">
                  <span>$</span>{card.price}
                </span>
              </div>
              <div className="card_content">
                <h2 className="card_title">{card.title}</h2>
                <p>{card.description}</p>
                <hr />
                {card.attributes.map((attr, idx) => (
                  <p key={idx}>
                    <strong>{attr.key}:</strong> {attr.value}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Adding Content */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create New Content</h2>
            <label>Title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter title"
            />
            <div className="attributes-section">
              <h3>Attributes</h3>
              {attributes.map((attr, index) => (
                <div key={index} className="attribute-row">
                  <input
                    type="text"
                    value={attr.key}
                    onChange={(e) =>
                      handleAttributeChange(index, 'key', e.target.value)
                    }
                    placeholder="Attribute"
                  />
                  <input
                    type="text"
                    value={attr.value}
                    onChange={(e) =>
                      handleAttributeChange(index, 'value', e.target.value)
                    }
                    placeholder="Value"
                  />
                </div>
              ))}
              <button onClick={handleAddAttribute} className="add-attribute">
                + Add Attribute
              </button>
            </div>
            <button onClick={handleSaveCard} className="save-card">
              Save
            </button>
            <button onClick={closeModal} className="close-modal">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="floating-container">
        <div className="floating-button" onClick={toggleChat}>
          <i className="fas fa-robot"></i>
        </div>

        {/* Chat Interface */}
        {showChat && (
          <div className="chat-container">
            <ul className="chat-messages">
              {messages.map((msg, index) => (
                <li
                  key={index}
                  className={msg.sender === 'user' ? 'chat-user' : 'chat-ai'}
                >
                  <div className="chat-profile">
                    {msg.sender === 'user' ? (
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                        alt="user profile"
                        className="chat-profile-img"
                      />
                    ) : (
                      <i className="fas fa-robot chat-profile-icon"></i>
                    )}
                  </div>
                  <div className="chat-message">
                    <span className="chat-message-text">{msg.text}</span>
                    <span className="chat-timestamp">{msg.timestamp}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="chat-input-section">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="chat-send-btn" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mook;

