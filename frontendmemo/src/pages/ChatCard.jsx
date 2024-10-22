import React, { useState } from 'react';
import '../Styles/ChatCard.css'; // Make sure to import your CSS styles

const ChatCard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage.trim()]);
      setNewMessage('');
    }
  };

  return (
    <div className="mainc">
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card m-0">
              <div className="row no-gutters">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                  <div className="users-container">
                    <div className="chat-search-box">
                      <div className="input-group">
                        <input className="form-control" placeholder="Search" />
                        <div className="input-group-btn">
                          <button type="button" className="btn btn-info">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className="users">
                      <li className="person" data-chat="person1">
                        <div className="user">
                          <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                          <span className="status busy"></span>
                        </div>
                        <p className="name-time">
                          <span className="name">Steve Bangalter</span>
                          <span className="time">15/02/2019</span>
                        </p>
                      </li>
                      {/* Add other users here */}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                  <div className="selected-user">
                    <span>To: <span className="name">Emily Russell</span></span>
                  </div>
                  <div className="chat-container">
                    <ul className="chat-box chatContainerScroll">
                      {messages.map((msg, index) => (
                        <li key={index} className="chat-right">
                          <div className="chat-hour">08:59 <span className="fa fa-check-circle"></span></div>
                          <div className="chat-text">{msg}</div>
                          <div className="chat-avatar">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                            <div className="chat-name">You</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="form-group mt-3 mb-0">
                      <textarea
                        className="form-control yo"
                        rows="3"
                        placeholder="Type your message here..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      ></textarea>
                      <button className="btn btn-primary mt-2" onClick={handleSendMessage}>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
