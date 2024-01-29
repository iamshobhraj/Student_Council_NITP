
import './App.css'
import Complainlist from './components/complainlist'
import SideBar from './components/SideBar'
import Feedback from './components/Feedback'

function App() {

  return (
    <>
    <div className='flex'>
    <SideBar />
    <div className='w-3/4'>
      <Complainlist/>
      <Feedback/>

    </div>

    </div>
    </>
  )
}

export default App
