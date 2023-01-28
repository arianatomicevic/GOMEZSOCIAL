import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">GOMEZSOCIAL</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <i class="fa-solid fa-person"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <i class="fa-sharp fa-solid fa-comment-medical"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <i class="fa-regular fa-bell"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/pictures/photo1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
