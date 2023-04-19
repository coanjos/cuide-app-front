import './App.css'
import { Rotas } from './routes/Rotas';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Navbar />
      <Toaster />
      <Rotas />
      <Footer />     
    </>
  )
}

export default App
