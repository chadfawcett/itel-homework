import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import styled from 'styled-components'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const Form = styled.form`
  display: flex;
  justify-content: center;
`

const InputContainer = styled.div`
  margin-right: 0.5em;
`

const PhoneNumberSearch = (props) => {
  const [phoneValue, setPhoneValue] = useState('1')

  const onSubmit = (e) => {
    e && e.preventDefault()

    props.onSubmit(phoneValue)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) onSubmit()
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputContainer>
        <PhoneInput
          country="ca"
          value={phoneValue}
          onChange={setPhoneValue}
          onKeyDown={onKeyDown}
          inputProps={{ autoFocus: true }}
        />
      </InputContainer>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        size="large"
        disabled={props.loading}
        startIcon={
          props.loading ? <CircularProgress size={22} /> : <SearchIcon />
        }>
        Search
      </Button>
    </Form>
  )
}

PhoneNumberSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

PhoneNumberSearch.defaultProps = {
  loading: false
}

export default PhoneNumberSearch
