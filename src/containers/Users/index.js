import React, { useState, useEffect } from 'react'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import axios from 'axios'
import {
  Container,
  H1,
  Button,
  ContainerItens,
  Image,
  User
} from './styles'
import Avatar from '../../assets/user.svg'
import { useNavigate } from 'react-router-dom'


const Users = () => {
  // const users = []
  const [users, setUsers] = useState([])
  console.log(users)

  const navigate = useNavigate()




  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
    }
    fetchUsers()
  }, []);


  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  const goBackPage = () => {
    navigate('/')
  }




  return (
    <Container>
      < Image alt="logo-peoples"
        src={
          Avatar
        }
      />
      <ContainerItens>
        <H1> Usuários </H1>
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='delete-user' /></button>
            </User>
          ))}

        </ul>
        <Button onClick={goBackPage} > <img src={Arrow} alt="seta-button" />Voltar</Button>
      </ContainerItens>
    </Container>

  );
}

export default Users