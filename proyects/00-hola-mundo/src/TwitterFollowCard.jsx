
export function TwitterFollowCard ({children ,formatUserName,userName='unknown',  isFollowing}){
    const imageSrc = `https://unavatar.io/${userName}`;

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header '>
            <img className='tw-followCard-avatar ' alt="El avatar de la imangen" 
            src={imageSrc}/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>{children}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article>
    )
}