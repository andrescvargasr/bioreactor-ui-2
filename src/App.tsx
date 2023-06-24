import NavBar from './components'
import './App.css'

function App(): JSX.Element {
  return (
    <div className='w-screen h-screen flex overflow-hidden flex-col lg:flex-row'>
      <NavBar />
      <div className='w-full h-full overflow-scroll bg-gray-50'>
        {/* <AppContent /> */}
      </div>
    </div>
  )
}

export default App
