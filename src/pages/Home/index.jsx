import React, {useState, useEffect} from 'react';

import './styles.css';
import {Card} from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState({ name: '', avatar: ''})

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

  // Uso api Nome e Avatar Github
  useEffect(() => {
    fetch('https://api.github.com/users/jvfonseca1').then(response => response.json()).then(data =>{
      setUsers({
        avatar: data.avatar_url,
        name: data.name,
      })
    })
  }, []);

  return ( 
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{users.name}</strong>
          <img src={users.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input 
          type="text" 
          placeholder="Digite o nome"
          autoFocus="true"
          onChange={e => setStudentName(e.target.value)
        }
      />
      <button
      id='addStudent'
      type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {
        students.map(student => 
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />)
      }
      
    </div>
  )
}
