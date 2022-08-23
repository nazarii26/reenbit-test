import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import usersData from "../../users";

export const Layout = () => {
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
                <img
                  className="search__icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
                />
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
                  {usersData.map((user) => (
                    <NavLink
                      to={`/${user.id}`}
                      state={{ user }}
                      className="link"
                      style={{ textDecoration: "none" }}
                    >
                      <li class="usersList__friend" key={user.id}>
                        <img
                          className="avatar"
                          src={user.avatar}
                          alt="avatar"
                        />
                        <div className="info">
                          <div className="title">
                            <p className="name">{user.first_name}</p>
                            <p className="meta">Jun 12, 2017</p>
                          </div>
                          <div className="subtitle">
                            <p className="last-message">You are the worst!</p>
                          </div>
                        </div>
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Outlet />
        </div>

        <footer></footer>
      </div>
    </>
    //  <>
    //    <div className="container">
    //      <header>
    //        <NavLink to="/authorization">Login</NavLink>
    //        <NavLink to="/">Home</NavLink>
    //        <NavLink to="/about">About</NavLink>
    //        <NavLink to="/posts">Posts</NavLink>
    //      </header>
    //      <Outlet />
    //      <footer>
    //        <p className="footer-name">Nazarii Pirih</p>
    //      </footer>
    //    </div>
    //  </>
  );
};
