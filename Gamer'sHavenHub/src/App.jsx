import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() { 
  return (
    <div>
      <NavBar />
      <ItemListContainer className="tituloPrincipal" greeting={"Bienvenido a Gamer's Haven Hub."} />
    </div>
  )
}

export default App
