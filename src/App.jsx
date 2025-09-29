import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cidade, setCountCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregado] = useState(false);
  const [erro, setErro] = useState('');

//função para buscar dados db clima 
const buscaclima = async () => {

if(!cidade.trim()){
  setErro('Por favor, digite uma cidade');
  return;
  }
}

  setCarregado(true);
  setErro('');

try{

  } catch (error){

  } finaly {
    
  }
}
  return (
    <>
   
    </>
  )
}

export default App
