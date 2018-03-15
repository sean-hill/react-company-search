import React from 'react'
import './Icon.css'

const CompanyItem = ({ company }) => {
  const hasSymbol = company.logo.symbol && company.logo.symbol.url
  const firstLetter = company.name.substr(0, 1)
  const iconStyles = {
    background: `#${hasSymbol ? company.logo.symbol.color : '8CACBB'}`
  }

  return (
    <div className="company-icon" style={iconStyles}>
      {hasSymbol && <img alt="Symbol" src={company.logo.symbol.url} />}
      {!hasSymbol && <div className="letter">{firstLetter}</div>}
    </div>
  )
}

export default CompanyItem
