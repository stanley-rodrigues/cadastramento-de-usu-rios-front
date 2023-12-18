import React, { useState, useRef, } from 'react'
import Arrow from '../../assets/arrow.svg'
import axios from 'axios'
import {
  Container,
  H1,
  InputLabel,
  Input,
  Button,
  ContainerItens,
  Image,
} from './styles'
import People from '../../assets/peoples.svg'
import { useNavigate } from 'react-router-dom'


const App = () => {
  // const users = []
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()


  const addNewUser = async () => {

    const { data: newUser } = await axios.post('http://localhost:3001/users', { name: inputName.current.value, age: inputAge.current.value })
    setUsers([...users, newUser])
    console.log(newUser)

    navigate('/usuarios')
  }

  return (
    <Container>
      < Image alt="logo-peoples"
        src={
          People
        }
      />
      <ContainerItens>
        <H1> Olá </H1>
        <InputLabel>Nome</InputLabel>
        < Input ref={inputName} placeholder='name' />
        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder='idade' />
        <Button onClick={addNewUser}>Cadastrar<img src={Arrow} alt="seta-button" /></Button>
      </ContainerItens>
    </Container>

  );
}

export default App