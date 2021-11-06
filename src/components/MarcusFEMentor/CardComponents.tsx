import React from 'react'

export const Population = ({ population }: { population: number }) => {
  return (
    <span>
      <strong>Population: </strong>
      {population.toLocaleString('en', { useGrouping: true })}
      <br />
    </span>
  )
}

export const Region = ({ region }: { region: string }) => {
  return (
    <span>
      <strong>Region: </strong>
      {region}
      <br />
    </span>
  )
}

export const Capital = ({ capital }: { capital: string[] | undefined }) => {
  return (
    <span>
      <strong>Capital: </strong>
      {capital?.join(', ') ?? 'none'}
      <br />
    </span>
  )
}
