import React, {useState} from 'react';

import './styles.css';
import {Card} from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  // Função Adicionar Estudantes 
  function handleAddStudent(){
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState,newStudent]);
  }

  //Script Reconhecer Botão Enter
  addEventListener('keypress', function(e) {
    if(e.key === "Enter"){
      document.getElementById("addStudent").click();
    }  
  });

  return ( 
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input 
          type="text" 
          placeholder="Digite o nome"
          onChange={e => setStudentName(e.target.value)
        }
      />
      <button
      id='addStudent'
      type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }
      
    </div>
  )
}
