import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import CreateTask from './components/tasks/createTask.jsx'
import EditTask from './components/tasks/editTask.jsx'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/createTask' element={<CreateTask />}></Route>
        <Route path='/editTask/:id' element={<EditTask />}></Route>
      </Routes>
    </div>
  )
}

export default App
