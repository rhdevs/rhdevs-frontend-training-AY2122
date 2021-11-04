import React from 'react'

export const Population = (props: { population: number }) => {
  return (
    <text className="card-text">
      <strong>Population: </strong>
      {props.population.toLocaleString('en', { useGrouping: true })}
    </text>
  )
}

export const Region = (props: { region: string }) => {
  return (
    <text className="card-text">
      <strong>Region: </strong>
      {props.region}
    </text>
  )
}

export const Capital = (props: { capital: string[] | undefined }) => {
  return (
    <text className="card-text">
      <strong>Capital: </strong>
      {props.capital?.join(', ') ?? 'none'}
    </text>
  )
}
