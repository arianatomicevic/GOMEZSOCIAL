import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="pictures/birthday.png" alt="" />
          <span className="birthdayText">
            <b>Petar Petrovic</b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img className="rightbarAd" src="pictures/comercial.jpg" alt=""></img>
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="pictures/photo3.jpg"
                alt=""
              ></img>
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">Nikolina Nikolic</span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="pictures/photo4.jpg"
                alt=""
              ></img>
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">Maja Markovic</span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="pictures/photo5.jpg"
                alt=""
              ></img>
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">Petar Petrovic</span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="pictures/photo6.jpg"
                alt=""
              ></img>
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">Nikola</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
