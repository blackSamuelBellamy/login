import Form from './components/Form'
import Home from './views/Home'
import './components/styles/App.css'
import { States } from './hooks/DataContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <div className="container">
      <States>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  )
}

export default App
