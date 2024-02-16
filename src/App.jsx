import './App.css'
import '../src/index.css'
import Header from './components/Header/Header'
import Start from './pages/Start/Start'
import Catalog from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import Information from './pages/Information/Information'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element= {<Start/>} />
        <Route path='/catalog' element= {<Catalog/>} />
        <Route path='/:id' element= {<CardPage/>} />
        <Route path='/catalog/:id' element= {<CardPage/>} />
        <Route path='/information' element= {<Information/>} />
      </Routes>
    </> 

    
  )
}

export default App
