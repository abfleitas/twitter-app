import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
   <div className='App'>
    <TwitterFollowCard formatUserName={formatUserName} userName="pheralb" name="Pablo Hernández"/>
    <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Ángel Durán"/>
    <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk"/>
    <TwitterFollowCard formatUserName={formatUserName} userName="vxnder" name="Vanderhart"/>
   </div>
  )
}