import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="fa-solid fa-rss"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-message"></i>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-video"></i>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-user-group" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-bookmark"></i>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-regular fa-circle-question"></i>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-briefcase"></i>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-calendar-days"></i>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-graduation-cap"></i>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo7.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Marko Markovic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo5.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Stefan Stefanovic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo8.jpeg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Mladen</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo9.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Djordje Djordjevic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo1.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Nikola Nikolic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo3.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Valentina Tomic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo5.jpg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Tomislav Lukic</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="pictures/photo8.jpeg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Vedran Milosevic</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
