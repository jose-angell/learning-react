
export function TwitterFollowCard ({userName, name, isFollowing}){
    const imageSrc = `https://unavatar.io/${userName}`;

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header '>
            <img className='tw-followCard-avatar ' alt="El avatar de la imangen" 
            src={imageSrc}/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>Follow</button>
        </aside>
    </article>
    )
}