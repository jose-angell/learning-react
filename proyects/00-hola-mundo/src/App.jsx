import './App.css';

export function App () {
    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header '>
            <img className='tw-followCard-avatar ' alt="El avatar de la imangen" src="https://unavatar.io/kikobeats?ttl=1h"/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>Miguel Ramirez Lopez</strong>
                <span>@mirazd</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>Follow</button>
        </aside>
    </article>
    )
}