
import './App.css'
import Complainlist from './components/complainlist'
import SideBar from './components/SideBar'
import Feedback from './components/Feedback'
import ComplaintForm from './components/ComplaintForm'

function App() {

  return (
    <>
    <div className='flex'>
    <SideBar />
    <div className='w-3/4'>
      <Complainlist/>
      <ComplaintForm />

    </div>

    </div>
    <Feedback/>
    </>
  )
}

export default App
