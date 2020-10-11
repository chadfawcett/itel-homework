import useSWR from 'swr'
import fetcher from './fetcher'

export default (phoneNumber) => {
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
