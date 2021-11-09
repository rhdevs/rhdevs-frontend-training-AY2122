import React from 'react'

const SpacePage = () => {
  const [period, setPeriod] = React.useState('Daily')
  const [pastPeriod, setPastPeriod] = React.useState('Last day')

  return (
    <>
      <div>Hello Space Website</div>
    </>
  )
}

export default SpacePage
