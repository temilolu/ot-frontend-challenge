import React, { Fragment, useState } from 'react'
import DataChart from './DataChart'

const TableItem = ({ item }) => {
  const [show, setShow] = useState('+')
  const [display, setDisplay] = useState('d-none')
  if (!item) {
    return <p>loading</p>
  }

  const { symbol, name } = item.target.gene_info
  const { id } = item.target
  const { datatypes, overall } = item.association_score

  const handleClick = e => {
    e.preventDefault()
    if (show === '+') {
      setShow('-')
      setDisplay('')
    } else {
      setShow('+')
      setDisplay('d-none')
    }
  }

  return (
    <Fragment>
      <div className='rowlly'>
        <div className='box'>
          <button onClick={handleClick}> {show} </button>
        </div>
        <div className='box'>{symbol}</div>
        <div className='box'>{id}</div>
        <div className='box'>{name}</div>
        <div className='box'>{overall}</div>
      </div>

      <div className={`rowll ${display}`}>
        <DataChart chart={datatypes} />
      </div>
    </Fragment>
  )
}

export default TableItem
