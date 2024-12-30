import {useState} from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';

function App() {

  const[input, setInput] = useState('')


  function handleSearch(){
    // alert("Clicou!")
    alert("VALOR DO INPUT" + input)
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />
      
      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch  size={25} color='#FFF'/>
      </button>
      </div>
      
      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span> Rua teste algum</span>
        <span>Complemento: algum complemento</span>
        <span>Jardim Conceicao</span>
        <span>Campinas-sp </span>

      </main>
    
    </div>
  );
}

export default App;
