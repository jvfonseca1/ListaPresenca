import React, {useState} from 'react';
import './styles.css';

import {Card} from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState();
  return (
    <div className='container'>
      <h1>Lista de Presença:</h1>
      <input 
        type="text" 
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button"> Adicionar</button>

      <Card name="João Victor" time="13:23" />
      <Card name="Rodrigo" time="10:55" />
      <Card name="Ana" time="12:10" />
    </div>
  )
}


