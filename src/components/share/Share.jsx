import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/pictures/photo1.jpg" alt="" />
          <input
            placeholder="What's on your mind Milan?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <i class="fa-solid fa-photo-film"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <i class="fa-solid fa-tag"></i>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <i class="fa-solid fa-location-pin"></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <i class="fa-regular fa-face-smile"></i>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
