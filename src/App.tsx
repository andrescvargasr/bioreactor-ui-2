import { useState } from 'react'
import hackuariumLogo from './assets/logo.svg'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img
            src={hackuariumLogo}
            className='logo hackuarium'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Hackuarium UI for all the projects</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Hackuarium logo to learn more
      </p>
    </>
  )
}

export default App
