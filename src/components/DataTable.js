import React from 'react'
import TableItem from './TableItem'

const DataTable = ({ data }) => {
  if (!data) {
    return <p>loading</p>
  }

  return (
    <div className='wrapper'>
      <div className='box-header'>#</div>
      <div className='box-header'>Symbol</div>
      <div className='box-header'>Gene ID</div>
      <div className='box-header'>Gene Name</div>
      <div className='box-header'>Overall Association Score</div>

      {data
        .sort(
          (a, b) => b.association_score.overall - a.association_score.overall
        )
        .map((item, i) => (
          <TableItem key={i} item={item} />
        ))}
    </div>
  )
}

export default DataTable
