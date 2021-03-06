import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Genres = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const deleteGenre = id => {
    axios
    .delete('/api/genres/' + id)
    .then(res => {
      const filtered = data.filter(item => item.id !== id)
      setData(filtered)
    })
  }

  const renderizeLine = record => {
    return (
      <tr key={record.id}>
      <th scope='row'>{record.id}</th>
      <td>{record.name}</td>
      <td>
        <button className='btn btn-danger mr-4' onClick={() => deleteGenre(record.id)}>Remove</button>
        <Link to={'/genres/' + record.id} className='btn btn-warning'>Edit</Link>
      </td>
      </tr>
    )
  }

  if(data.length === 0) {
    return (
      <div className='container'>
        <div className='m-3 d-flex justify-content-between'>
          <h1>Genres</h1>
          <Link to='/series/new' className='btn-lg btn-primary'>New Genre</Link>
        </div>
        <div className='alert alert-warning' role='alert'>
          You do not have any genres created.
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
        <div className='m-3 d-flex justify-content-between'>
          <h1>Genres</h1>
          <Link to='/genres/new' className='btn-lg btn-primary'>New Genre</Link>
        </div>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizeLine)}
        </tbody>
        </table>
    </div>
    )
  }
  export default Genres