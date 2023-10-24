import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

export default function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <p className='column'>Authentication Error</p>;
  }

  if (!error && isLoading) {
    return <p className='column'>Loading...</p>
  }

  return (
    <section className='column'>
      <h1>React JS Auth using Auth0</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </section>
  )
}