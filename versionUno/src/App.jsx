
import './App.css'
import Home from './components/home/Home'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import Accounts from './components/Accounts'
import AboutUs from './components/AboutUs'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/accounts' element={<Accounts/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
