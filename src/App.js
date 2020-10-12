import React, { useState } from 'react'
import styled from 'styled-components'
import { Alert } from '@material-ui/lab'

import useSearchHistory from './data/useSearchHistory'
import fetchNumberInfo from './data/fetchNumberInfo'
import PhoneNumberSearch from './PhoneNumberSearch'
import PhoneNumberDetails from './PhoneNumberDetails'

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 40px auto;
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const { searchHistory, addSearch, clearHistory } = useSearchHistory()

  const onSubmit = async (number) => {
    setIsLoading(true)

    /**
     * If we have already searched for this number, there is no need to request
     * the info again
     */
    const prevInfo = searchHistory.find(({ phone }) => phone === `+${number}`)
    if (prevInfo) {
      addSearch(prevInfo)
      setError()
      setIsLoading(false)
      return
    }

    const data = await fetchNumberInfo(number)

    if (data.phone_valid) {
      addSearch(data)
      setError()
    } else {
      setError('That phone number is not valid')
    }
    setIsLoading(false)
  }

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <Header>Phone Number Search</Header>
      <PhoneNumberSearch onSubmit={onSubmit} loading={isLoading} />
      <PhoneNumberDetails phoneNumbers={searchHistory} onClear={clearHistory} />
    </Container>
  )
}

export default App
