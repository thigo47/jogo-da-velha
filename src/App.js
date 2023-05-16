import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import styles from "./estilo.module.css";
import { useState } from 'react';


function App() {
  const [valorq1 , setValorq1] = useState("")
  const [valorq2 , setValorq2] = useState("")
  const [valorq3 , setValorq3] = useState("")
  const [valorq4 , setValorq4] = useState("")
  const [valorq5 , setValorq5] = useState("")
  const [valorq6 , setValorq6] = useState("")
  const [valorq7 , setValorq7] = useState("")
  const [valorq8 , setValorq8] = useState("")
  const [valorq9 , setValorq9] = useState("")

  function clicouq1(params) {
    setValorq1("X")
    setInterval(()=>{
      setValorq2("O")
    }, 1000)

    for (var i = 0; i < 10; i++) {
      var valorAleatorio = Math.floor(Math.random() * 10) + 1;
      console.log(valorAleatorio);
    }
    
   
  }
  
  return (
    <div className="App">
      <div className={styles.container}>

      <div className={styles.q} onClick={clicouq1}>{valorq1}</div>
      
      <div className={styles.q}>{valorq2}</div>
      
      <div className={styles.q}>{valorq3}</div>
      
      
      <div className={styles.q}>{valorq4}</div>
      
      <div className={styles.q}>{valorq5}</div>

      <div className={styles.q}>{valorq6}</div>

      <div className={styles.q}>{valorq7}</div>

      <div className={styles.q}>{valorq8}</div>

      <div className={styles.q}>{valorq9}</div>



      </div>
    </div>
  );
}

export default App;
