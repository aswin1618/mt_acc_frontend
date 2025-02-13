import './App.css'
import Home from './pages/Home'
import Content from './pages/Content'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <main className="scroll-smooth">
        <Home />
        <hr className="border-t border-gray-300 w-11/12 mx-auto my-6" />
        <Content />
        <hr className="border-t border-gray-300 w-11/12 mx-auto my-6" />
        <About />
      </main>
    </div>
  )
}

export default App
