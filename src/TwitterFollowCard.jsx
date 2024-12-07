export function TwitterFollowCard ({userName, name, isFollowing}) {
    const formatUserName = (userName) => `@${userName}`

    return (
        <article className='tw-follow'>
        <header className='tw-follow-header'>
          <img className='tw-follow-img' src={`https://unavatar.io/${userName}`} alt="avatar" />
          <div className='tw-follow-info'>
            <strong>{name}</strong>
            <span className='tw-follow-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className='tw-follow-button'>Seguir</button>
        </aside>
      </article>
    )
}