import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import DataTable from './components/DataTable'
import axios from 'axios'
import './App.css'

const App = () => {
  const [target, setTarget] = useState([])
  const [currentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://demo6922545.mockable.io/')
      setTarget(res.data.data)

      // eslint-disable-next-line
    }
    fetchData()
  }, [])

  // Get the current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = target.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className='container'>
      <Header name='Genes associated with lung carcinoma' />

      <DataTable data={currentPosts} />
    </div>
  )
}

export default App
