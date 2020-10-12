import fetchNumberInfo from './fetchNumberInfo'

const mockSuccessResponse = {}
const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })

test('Fetches from Verifphone and passes phone number', async () => {
  const fetchSpy = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => mockFetchPromise)

  const number = '12501234567'
  fetchNumberInfo(number)

  expect(fetchSpy).toHaveBeenCalledTimes(1)
  expect(fetchSpy).toHaveBeenCalledWith(
    expect.stringContaining(number),
    expect.anything()
  )
})
