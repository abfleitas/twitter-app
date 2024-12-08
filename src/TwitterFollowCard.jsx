import { useState } from "react";

export function TwitterFollowCard ({children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const formatUserName = (userName) => `@${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
    ? 'tw-follow-button is-following' 
    : 'tw-follow-button'
  
    const handleClick = () => setIsFollowing(!isFollowing);

    return (
        <article className='tw-follow'>
        <header className='tw-follow-header'>
          <img className='tw-follow-img' src={`https://unavatar.io/${userName}`} alt="avatar" />
          <div className='tw-follow-info'>
            <strong>{children}</strong>
            <span className='tw-follow-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-follow-text">{text}</span>
            <span className="tw-follow-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}