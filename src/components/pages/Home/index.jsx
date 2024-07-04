import React, { useState, useEffect } from 'react'
import { Box, Typography, Container } from '@mui/material'
import axios from 'axios'
import Charts from '../../charts/PizzaChart'

const Home = () => {
  const [totalUsers, setTotalUsers] = useState(0)
  const [juneBirthdays, setJuneBirthdays] = useState(0)
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({})

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3100/v1/users/list')
        const users = response.data

        const juneCount = users.filter(user => {
          const birthDate = new Date(user.birthDate)
          return birthDate.getMonth() === 5
        }).length

        const monthlyCount = users.reduce((acc, user) => {
          const month = new Date(user.birthDate).getMonth()
          acc[month] = (acc[month] || 0) + 1
          return acc
        }, {})

        setTotalUsers(users.length)
        setJuneBirthdays(juneCount)
        setBirthdaysByMonth(monthlyCount)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <Container>
      <Box p={3}>
        <Typography variant="h1" mb={3}>Home Page</Typography>
        <Charts
          totalUsers={totalUsers}
          juneBirthdays={juneBirthdays}
          birthdaysByMonth={birthdaysByMonth}
        />
      </Box>
    </Container>
  )
}

export default Home
