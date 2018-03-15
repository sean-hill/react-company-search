import React from 'react'
import CompanyIcon from '../Icon/Icon'
import './Item.css'

const CompanyItem = ({ company }) => (
  <div className="company-item">
    <CompanyIcon company={company} />
    <div className="name">{company.name}</div>
  </div>
)

export default CompanyItem
