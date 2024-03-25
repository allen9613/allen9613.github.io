import { useState } from 'react'
import About from './About'
import MessageBoard from './MessageBoard'
import VisitorCounter from './VisitorCounter'
import './App.css'

function App() {
  const [tab, setTab] = useState('About')

  return (
    <>
      <div className="banner">
        <h1>網路攻防實習</h1>
        <div className="tabs">
          <button
            className={tab === 'About' ? 'active' : ''}
            onClick={() => setTab('About')}
          >
            About
          </button>
          <button
            className={tab === 'Message Board' ? 'active' : ''}
            onClick={() => setTab('Message Board')}
          >
            Message Board
          </button>
          <button>
          <VisitorCounter />
          </button>
        </div>
        <div className="buttons">
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </div>
      <div className="content">
        {tab === 'About' && <About />}
        {tab === 'Message Board' && <MessageBoard />}
      </div>
    </>
  )
}

export default App

