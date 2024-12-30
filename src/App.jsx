import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './Pages/StartGame'
import PlayGame from './Pages/PlayGame'
// import TextInputForm from './components/TextInputForm/TextInputForm'
// import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
// import Button from './Button.jsx'

function App() {
  return (
    // <div>
    //   <TextInputFormContainer/>
    // </div>

    <Routes>
      <Route path='/start' element={<StartGame/>} />
      <Route path='/play' element={<PlayGame/>} />
      <Route path='/' element={<div>Home</div>}/>
    </Routes>
  )
}

export default App
