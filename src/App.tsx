import { NavBar } from './components'

function App(): JSX.Element {
  return (
    <div className='w-screen h-screen flex overflow-hidden flex-col lg:flex-row'>
      <NavBar />
      {/* <p>Hello</p> */}
      <div className='w-full h-full overflow-scroll bg-gray-50'>
        {/* <AppContent /> */}
        <p>World!</p>
      </div>
    </div>
  )
}

export default App
