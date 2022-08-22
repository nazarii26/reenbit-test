import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <div className="body">
          <div className="sidebar">
            <div className="leftHeader">
              <div className="currentUser">
                <img
                  className="avatar"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                  alt="avatar"
                />
              </div>

              <div className="search">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search or start new chat"
                />
              </div>
            </div>

            <div className="usersList">
              <div className="usersList__tabs">
                <button className="usersList__button">Chats</button>
              </div>

              <div className="usersList__chats">
                <ul className="usersList__list">
                  <li class="usersList__friend">
                    <img
                      className="avatar"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
                      alt="avatar"
                    />
                    <div className="info">
                      <div className="title">
                        <h3>Erica Hughes</h3>
                        <p className="meta">Jun 12, 2017</p>
                      </div>
                      <div className="subtitle">
                        <p className="last-message">You are the worst!</p>
                      </div>
                    </div>
                  </li>
                  <li class="usersList__friend">
                    <img
                      className="avatar"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
                      alt="avatar"
                    />
                    <div className="info">
                      <div className="title">
                        <h3>Erica Hughes</h3>
                        <p className="meta">Jun 12, 2017</p>
                      </div>
                      <div className="subtitle">
                        <p className="last-message">You are the worst!</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="chat__user">
              <img
                className="avatar"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
                alt="avatar"
              />
              <h3>Erica Hughes</h3>
            </div>
            <div className="chat__history">
              <div className="chat__messageContent">
                <div className="chat__userMessage">
                  <img
                    className="avatar"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
                    alt="avatar"
                  />
                  <div className="chat__userMessageContent">
                    <p className="chat__text">Hello, my dear friend</p>
                  </div>
                </div>
                <p className="chat__date">4/2/2017, 5:00am</p>
              </div>
              <div className="chat__myMessage">
                <div className="chat__myMessageContent">
                  <p className="chat__text">Nice to meet you!</p>
                  <p className="chat__date">4/2/2017, 5:01am</p>
                </div>
              </div>
            </div>
            <div className="chat__input">
              <textarea
                name="sendMessage"
                id="sendMessage"
                placeholder="Type your message"
                rows="3"
              ></textarea>
              <button className="button">Send</button>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
