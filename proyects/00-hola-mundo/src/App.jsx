import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import { useState } from 'react';

const users = [
    { userName: 'midudev', name: 'Miguel Angel Duran', initialIsFollowing: true },
    { userName: 'joseangell', name: 'Jose Angel Gallardo', initialIsFollowing: true },
    { userName: 'pedromichel', name: 'Pedro Michel', initialIsFollowing: false }
]

export function App () {
    
    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, initialIsFollowing} = user;
                    return(
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={initialIsFollowing}
                        >{name}</TwitterFollowCard>
                    )
                })
            }

        </section>
    )
}