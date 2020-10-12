import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import PhoneNumberSearch from './PhoneNumberSearch'

test('Submitting form calls onSubmit', () => {
  const onSubmit = jest.fn()
  const { getByText } = render(<PhoneNumberSearch onSubmit={onSubmit} />)

  const searchButton = getByText(/search/i)
  fireEvent.submit(searchButton)

  expect(onSubmit).toHaveBeenCalled()
})

test('Disable button and show spinner when loading', () => {
  const { getByText, getByRole } = render(
    <PhoneNumberSearch onSubmit={() => {}} loading={true} />
  )

  expect(getByText(/search/i)).toBeDisabled()
  expect(getByRole('progressbar')).toBeInTheDocument()
})
