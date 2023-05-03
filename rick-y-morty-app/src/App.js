import React, {useEffect,useState} from "react";
import Header from "./componentes/Header";
import './App.css';
import Characters from "./componentes/Characters";
import Pagination from "./componentes/Pagination";

function App() {

  const[characters, setCharacters]= useState([]);
  const[info, setInfo]= useState({});

  const inicialUrl= "https://rickandmortyapi.com/api/character"

  const fechtCharacters =(url)=>{

      fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error=>console.log(error))
  };

  const onPrevios = () =>{
    fechtCharacters(info.prev);
  }
  const onNext = () =>{
    fechtCharacters(info.next);
  }
  useEffect(()=>{
    fechtCharacters(inicialUrl);
  },[])

  return (
    <>
      <Header/>
      <Pagination prev={info.prev} next={info.next} onPrevios={onPrevios} onNext={onNext}/>
      <Characters characters={characters}/>
      <Pagination prev={info.prev} next={info.next} onPrevios={onPrevios} onNext={onNext}/>
    </>
  

  );
}

export default App;
