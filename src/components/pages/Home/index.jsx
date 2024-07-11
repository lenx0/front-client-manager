import React, { useEffect, useState } from 'react'
import { Box, Typography, Container, LinearProgress } from '@mui/material'
import Charts from '../../charts/PizzaChart'
import { getUsers } from '../../../api'

const Home = () => {
  const [totalUsers, setTotalUsers] = useState(0)
  const [juneBirthdays, setJuneBirthdays] = useState(0)
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({})
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers({
          onDownloadProgress: progressEvent => {
            const total = progressEvent.total
            const current = progressEvent.loaded
            const percentage = Math.floor((current / total) * 100)
            setProgress(percentage)
          }
        }) 
          
        const users = response

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
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <Container >
      <Box>
        {loading ? (
          <Box>
            <Typography variant="h6">Carregando dados... isso deve demorar um pouco pois estamos utilizando hospedagem gratuíta</Typography>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        ) : (
          <Charts
            totalUsers={totalUsers}
            juneBirthdays={juneBirthdays}
            birthdaysByMonth={birthdaysByMonth}
          />
        )}
      </Box>
    </Container>
  )
}

export default Home
