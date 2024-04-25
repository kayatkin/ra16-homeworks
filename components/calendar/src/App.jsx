import './App.css'
import { Calendar } from './components/Calendar'

function App() {
  const now = new Date(2024, 4, 21)

  return (
    <>
      <Calendar date={now} />   
    </>
  )
}

export default App
