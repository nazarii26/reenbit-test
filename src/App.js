import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { ChatHistory } from "./components/ChatHistory/ChatHistory";
import { Layout } from "./components/Layout/Layout";
import usersData from "./users.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:id" element={<ChatHistory />} />
        </Route>
      </Routes>
    </>

    // <>
    //   <div className="container">
    //     <div className="body">
    //       <div className="sidebar">
    //         <div className="leftHeader">
    //           <div className="currentUser">
    //             <img
    //               className="avatar"
    //               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
    //               alt="avatar"
    //             />
    //           </div>

    //           <div className="search">
    //             <input
    //               className="search__input"
    //               type="text"
    //               placeholder="Search or start new chat"
    //             />
    //           </div>
    //         </div>

    //         <div className="usersList">
    //           <div className="usersList__tabs">
    //             <button className="usersList__button">Chats</button>
    //           </div>

    //           <div className="usersList__chats">
    //             <ul className="usersList__list">
    //               {usersData.map((user) => (
    //                 <li class="usersList__friend" key={user.id}>
    //                   <img className="avatar" src={user.avatar} alt="avatar" />
    //                   <div className="info">
    //                     <div className="title">
    //                       <p className="name">{user.first_name}</p>
    //                       <p className="meta">Jun 12, 2017</p>
    //                     </div>
    //                     <div className="subtitle">
    //                       <p className="last-message">You are the worst!</p>
    //                     </div>
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="chat">
    //         <div className="chat__user">
    //           <img
    //             className="avatar"
    //             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
    //             alt="avatar"
    //           />
    //           <p className="name">Erica Hughes</p>
    //         </div>
    //         <div className="chat__history">
    //           <div className="chat__messageContent">
    //             <div className="chat__userMessage">
    //               <img
    //                 className="avatar"
    //                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
    //                 alt="avatar"
    //               />
    //               <div className="chat__userMessageContent">
    //                 <p className="chat__text">Hello, my dear friend</p>
    //               </div>
    //             </div>
    //             <p className="chat__date">4/2/2017, 5:00am</p>
    //           </div>

    //           <div className="chat__myMessageItem">
    //             <div className="chat__myMessageBlock">
    //               <p className="chat__myText">
    //                 Note that the development build is not optimized. To create
    //                 a production build, use npm run build.
    //               </p>
    //             </div>
    //             <p className="chat__myDate">3/2/2017, 7:00am</p>
    //           </div>
    //         </div>
    //         <div className="chat__input">
    //           <textarea
    //             name="sendMessage"
    //             id="sendMessage"
    //             placeholder="Type your message"
    //             rows="3"
    //           ></textarea>
    //           <button className="button">*</button>
    //         </div>
    //       </div>
    //     </div>
    //     <footer></footer>
    //   </div>
    // </>
  );
}

export default App;
