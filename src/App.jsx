import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <h1>Web Developer <br /> At Your Website</h1>
        <input type="text" placeholder="I'm a title. Click here to edit me." />
        <button>See Services</button>
      </main>
    </>
  )
}

export default App
