import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    const format = (userName) => `@${userName}`;
    const joseAngell = {isFowlowing: false, userName: 'jose-angell'};
    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="midudev" 
            >
                <strong>Migel Angel Duran</strong>
           </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} {...joseAngell} 
            >jose angel gallardo</TwitterFollowCard>
            
        </section>
    )
}