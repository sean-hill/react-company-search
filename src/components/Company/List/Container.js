import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyList from './List'

class CompanyListContainer extends Component {
  async componentDidMount() {
    const { fetchCompanies } = this.props
    await fetchCompanies()
  }

  render() {
    return (
      <div>
        <CompanyList {...this.props} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    companies: state.companies.list,
    initialized: state.companies.initialized
  }
}

const mapDispatch = dispatch => ({
  fetchCompanies: query => dispatch.companies.fetch(query)
})

export default connect(mapState, mapDispatch)(CompanyListContainer)
