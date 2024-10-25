import React, { useState } from 'react';
import '../../Styles/Mook.css';

const Mook = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSend = () => {
    // Logic to handle message sending
    console.log("Message sent:", message);
    setMessage(""); // Clear the input field after sending
  };

  return (
    <div className="main">
      {/* Other content, like the card list */}
       <div class="d-grid gap-2">
            <button class="btn btn-outline-dark" type="button">
                Add
            </button>
        </div>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
              <span className="card_price"><span>$</span>9</span>
            </div>
            <div className="card_content">
              <h2 className="card_title">Farmstand Salad</h2>
              <div className="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                  leafy greens and seasonal vegetables, fresh from the farmer's market.
                </p>
                <hr />
                <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                    vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                  of protein for $2 more.
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* Add other cards here */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
              <span className="card_price"><span>$</span>9</span>
            </div>
            <div className="card_content">
              <h2 className="card_title">Farmstand Salad</h2>
              <div className="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                  leafy greens and seasonal vegetables, fresh from the farmer's market.
                </p>
                <hr />
                <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                    vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                  of protein for $2 more.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
              <span className="card_price"><span>$</span>9</span>
            </div>
            <div className="card_content">
              <h2 className="card_title">Farmstand Salad</h2>
              <div className="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                  leafy greens and seasonal vegetables, fresh from the farmer's market.
                </p>
                <hr />
                <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                    vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                  of protein for $2 more.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
              <span className="card_price"><span>$</span>9</span>
            </div>
            <div className="card_content">
              <h2 className="card_title">Farmstand Salad</h2>
              <div className="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                  leafy greens and seasonal vegetables, fresh from the farmer's market.
                </p>
                <hr />
                <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                    vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                  of protein for $2 more.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
              <span className="card_price"><span>$</span>9</span>
            </div>
            <div className="card_content">
              <h2 className="card_title">Farmstand Salad</h2>
              <div className="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                  leafy greens and seasonal vegetables, fresh from the farmer's market.
                </p>
                <hr />
                <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                    vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                  of protein for $2 more.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="floating-container">
        <div className="floating-button" onClick={toggleChat}>
          <i className="fas fa-robot"></i>
        </div>

        {showChat && (
          <div className="chat-container">
            <input
              type="text"
              className="chat-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="chat-send-btn" onClick={handleSend}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mook;
