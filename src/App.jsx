import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Principal } from './components/Principal/Principal'

function App() {
  return (
    <>
    <Header/>
      <main>
        <Principal/>
      </main>
    <Footer/>
    </>
  )
}

export default App
