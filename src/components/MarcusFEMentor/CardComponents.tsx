import React from 'react'

export const Population = (props: { population: number }) => {
  return (
    <text>
      <strong>Population: </strong>
      {props.population.toLocaleString('en', { useGrouping: true })}
    </text>
  )
}

export const Region = (props: { region: string }) => {
  return (
    <text>
      <strong>Region: </strong>
      {props.region}
    </text>
  )
}

export const Capital = (props: { capital: string[] | undefined }) => {
  return (
    <text>
      <strong>Capital: </strong>
      {props.capital?.join(', ') ?? 'none'}
    </text>
  )
}
