import React from 'react'
import styled from 'styled-components'

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
  return (
    <Container>
      <Header>Phone Number Search</Header>
      <PhoneNumberSearch onSubmit={console.log} />
      <PhoneNumberDetails />
    </Container>
  )
}

export default App
