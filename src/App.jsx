import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { States } from './hooks/DataContext'
import Form from './views/Form'
import Home from './views/Home'
import Busqueda from './views/Busqueda'
import './components/styles/App.css'


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
            <Route path='/busqueda' element={<Busqueda />} />
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  )
}

export default App
