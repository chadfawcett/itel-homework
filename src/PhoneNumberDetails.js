import React from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'

const fetcher = (...args) =>
  fetch(...args, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'veriphone.p.rapidapi.com',
      'x-rapidapi-key': 'd271880ca1msh4e561daf16890d6p1252f4jsn9f4922c097e0'
    }
  }).then((res) => res.json())

const usePhoneNumber = (phoneNumber) => {
  const { data, error } = useSWR(
    `https://veriphone.p.rapidapi.com/verify?phone=${phoneNumber}`,
    fetcher
  )

  return {
    data,
    isLoading: !error && !data,
    error
  }
}

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
