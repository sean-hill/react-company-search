import React from 'react'
import CompanyListContainer from '../components/Company/List/Container'
import CompanySearchContainer from '../components/Company/Search/Container'
import { Section, Container, Columns, Column } from 'bloomer'

const ScreensCompanies = ({ match: { params } }) => (
  <Section>
    <Container>
      <Columns>
        <Column
          isSize={{ mobile: 12, default: 6 }}
          isOffset={{ mobile: 0, default: 3 }}
        >
          <CompanySearchContainer />
          <CompanyListContainer />
        </Column>
      </Columns>
    </Container>
  </Section>
)

export default ScreensCompanies
