import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Migel Angel Duran"/>
            <TwitterFollowCard isFollowing={false} userName="jose-angell" name="jose angel gallardo"/>
            <TwitterFollowCard isFollowing userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk"/>
            <TwitterFollowCard isFollowing userName="vxnder" name="Vanderhart"/>
        
        </section>
    )
}