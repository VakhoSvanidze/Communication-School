import React from 'react'

function Results({firstName, lastName, email, city}) {
  return (
    <div className="list-item">
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h3>{email}</h3>
      <h3>{city}</h3>
    </div>
  )
}

export default Results;