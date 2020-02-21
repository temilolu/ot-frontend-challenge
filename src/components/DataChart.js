import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const DataChart = ({ chart }) => {
  const [chatData] = useState({
    labels: [
      'literature',
      'rna_expression',
      'genetic_association',
      'somatic_mutation',
      'known_drug',
      'animal_model',
      'affected_pathway'
    ],
    datasets: [
      {
        label: 'Association Score vs Data Type',
        data: [
          chart.literature,
          chart.rna_expression,
          chart.genetic_association,
          chart.somatic_mutation,
          chart.known_drug,
          chart.animal_model,
          chart.affected_pathway
        ],
        backgroundColor: 'rgba(54, 162, 235, 2)'
      }
    ]
  })
  return (
    <div className='py-3'>
      <Bar data={chatData} width={100} height={30} options={{}} />
    </div>
  )
}

export default DataChart
