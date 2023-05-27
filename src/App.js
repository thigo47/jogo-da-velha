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

    let numeroAleatorio  = 0
    const numeroExcluir = 1
    for (let i = 0; i < 1 ; i++) {

      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
        console.log(numeroAleatorio);
      } while (numeroAleatorio === numeroExcluir);
    
    }
    
      if (numeroAleatorio == 2) {
        setValorq2("O")
      }else if (numeroAleatorio == 3){
        setValorq3("O")
      }else if (numeroAleatorio == 4){
        setValorq4("O")
      }else if (numeroAleatorio == 5){
        setValorq5("O")
      }else if (numeroAleatorio == 6){
        setValorq6("O")
      }else if (numeroAleatorio == 7){
        setValorq7("O")
      }else if (numeroAleatorio == 8){
        setValorq8("O")
      }else if (numeroAleatorio == 9){
        setValorq9("O")
      }
  }
  ////////////////////////////////////////////////
  function clicouq2(params) {
    setValorq2("X")
    let numeroAleatorio;
    const numeroExcluir = 2;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }

  /////////////////////////////////////////////
  function clicouq3(params) {
    setValorq3("X")
    let numeroAleatorio;
    const numeroExcluir = 3;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  ////////////////////////////////////////////////////////
  function clicouq4(params) {
    setValorq4("X")

    let numeroAleatorio;
    const numeroExcluir = 4;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  ////////////////////////////////////////////////
  function clicouq5(params) {
    setValorq5("X")

    let numeroAleatorio;
    const numeroExcluir = 5;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  /////////////////////////////////////////////////////
  function clicouq6(params) {
    setValorq6("X")

    let numeroAleatorio;
    const numeroExcluir = 6;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  /////////////////////////////////////////////////
  function clicouq7(params) {
    setValorq7("X")

    let numeroAleatorio;
    const numeroExcluir = 7;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  //////////////////////////////////////////////
  function clicouq8(params) {
    setValorq8("X")

    let numeroAleatorio;
    const numeroExcluir = 8;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }else if (numeroAleatorio == 9){
      setValorq9("O")
    }
  }
  ////////////////////////////////////////
  function clicouq9(params) {
    setValorq9("X")

    let numeroAleatorio;
    const numeroExcluir = 9;
    for (let i = 0; i < 1; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 9) + 1;
      } while (numeroAleatorio === numeroExcluir);
      console.log(numeroAleatorio);
    }
    if (numeroAleatorio == 1) {
      setValorq1("O")
    }else if (numeroAleatorio == 3){
      setValorq3("O")
    }else if (numeroAleatorio == 4){
      setValorq4("O")
    }else if (numeroAleatorio == 5){
      setValorq5("O")
    }else if (numeroAleatorio == 6){
      setValorq6("O")
    }else if (numeroAleatorio == 7){
      setValorq7("O")
    }else if (numeroAleatorio == 8){
      setValorq8("O")
    }else if (numeroAleatorio == 2){
      setValorq2("O")
    }
  }
  return (
    <div className="App">
      <div className={styles.seta}> V </div>
      <div className={styles.container}>
  
      <div className={styles.q} onClick={clicouq1}>{valorq1}</div>
      
      <div className={styles.q}  onClick={clicouq2}>{valorq2}</div>
      
      <div className={styles.q}  onClick={clicouq3}>{valorq3}</div>
      
      
      <div className={styles.q}  onClick={clicouq4}>{valorq4}</div>
      
      <div className={styles.q}  onClick={clicouq5}>{valorq5}</div>

      <div className={styles.q}  onClick={clicouq6}>{valorq6}</div>

      <div className={styles.q}  onClick={clicouq7}>{valorq7}</div>

      <div className={styles.q}  onClick={clicouq8}>{valorq8}</div>

      <div className={styles.q}  onClick={clicouq9}>{valorq9}</div>



      </div>
    </div>
  );
}

export default App;
