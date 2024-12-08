import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: true
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    },
    {
      userName: 'vxnder',
      name: 'Vanderhart',
      isFollowing: true
    }
  ]

  return (
   <div className='App'>
    {
      users.map(user => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={userName} 
            userName={userName}
            initialIsFollowing={isFollowing}
            >{name}
          </TwitterFollowCard>
        )
      })
    }
   </div>
  )
}