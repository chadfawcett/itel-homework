import React from 'react'
import PropTypes from 'prop-types'
import usePhoneNumber from './data/usePhoneNumber'

const PhoneNumberDetails = ({ phoneNumber }) => {
  const { data, isLoading, error } = usePhoneNumber(phoneNumber)

  if (error) return <div>Error!</div>
  if (isLoading) return <div>Loading!</div>
  if (data) console.log(data)

  return <div>Check the console for phone number data!</div>
}

PhoneNumberDetails.propTypes = {
  phoneNumber: PropTypes.string.isRequired
}

export default PhoneNumberDetails
