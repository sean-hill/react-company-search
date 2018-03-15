import React from 'react'
import CompanyItem from '../Item/Item'
import { Subtitle } from 'bloomer'

const CompanyList = ({ initialized, companies }) => (
  <div>
    {companies.map(company => (
      <CompanyItem key={company._id} company={company} />
    ))}
    {initialized &&
      companies.length === 0 && (
        <Subtitle isSize={6} hasTextAlign="centered">
          No companies found
        </Subtitle>
      )}
  </div>
)

export default CompanyList
