import { useState } from 'react'

/**
 * Custom hook to save search history in application state as well as local
 * storage
 */
export default () => {
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('searchHistory')) || []
  )

  //  Add search to state and local storage
  const addSearch = (search) => {
    const newHistory = [search, ...searchHistory]

    setSearchHistory(newHistory)
    localStorage.setItem('searchHistory', JSON.stringify(newHistory))
  }

  return { searchHistory, addSearch }
}
