import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import PhoneNumberDetails from './PhoneNumberDetails'

const mockPhoneNumbers = [
  {
    international_number: '+1 250-123-4567',
    phone_region: 'British Columbia',
    country: 'Canada'
  }
]

test('Displays message when there is no info to display', () => {
  const { getByText } = render(
    <PhoneNumberDetails phoneNumbers={[]} onClear={() => {}} />
  )

  const message = getByText(
    'Search phone numbers above and they will appear in this table'
  )

  expect(message).toBeInTheDocument()
})

test('Displays phone number info', () => {
  const { getByText } = render(
    <PhoneNumberDetails phoneNumbers={mockPhoneNumbers} onClear={() => {}} />
  )

  expect(
    getByText(mockPhoneNumbers[0].international_number)
  ).toBeInTheDocument()
  expect(getByText(mockPhoneNumbers[0].phone_region)).toBeInTheDocument()
  expect(getByText(mockPhoneNumbers[0].country)).toBeInTheDocument()
})

test('Clicking the clear button calls onClear', () => {
  const onClear = jest.fn()
  const { getByText } = render(
    <PhoneNumberDetails phoneNumbers={[]} onClear={onClear} />
  )

  const clearButton = getByText(/clear/i)
  fireEvent.click(clearButton)

  expect(onClear).toHaveBeenCalled()
})
