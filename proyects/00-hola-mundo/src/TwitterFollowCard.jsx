import { useState } from "react";

export function TwitterFollowCard ({children ,userName='unknown', initialIsFollowing}) {
    const [isFollowing, seIsFollowing] = useState(initialIsFollowing);
    
    const imageSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ?
     'tw-followCard-button is-following' : 'tw-followCard-button';
    const handleClick = () => {
        seIsFollowing(!isFollowing);
    }
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header '>
            <img className='tw-followCard-avatar ' alt="El avatar de la imangen" 
            src={imageSrc}/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>{children}</strong>
                <span>{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}