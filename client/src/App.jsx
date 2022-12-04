import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Homepage from 'scenes/homePage'
import Login from 'scenes/loginPage'
import Profile from 'scenes/profilePage'


function App() {
  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/profile/:userId' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

      

export default App