import Form from './components/Form'
import './components/styles/App.css'
import { States } from './hooks/DataContext'


const App = () => {

  return (
    <div className="container">
      <States>
        <Form />
      </States>
    </div>
  )
}

export default App
