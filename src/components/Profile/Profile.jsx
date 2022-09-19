
export default function Profile({user}) {
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={user.avatar} alt="User avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <ul className="stats">
    <li className="profile-label">
      <span className="label">Followers</span>
      <span className="quantity">&nbsp;{user.stats.followers}</span>
    </li>
    <li className="profile-label">
      <span className="label">Views</span>
      <span className="quantity">&nbsp;{user.stats.views}</span>
    </li>
    <li className="profile-label">
      <span className="label">Likes</span>
      <span className="quantity">&nbsp;{user.stats.likes}</span>
    </li>
      </ul>
   </div>
  )
}
