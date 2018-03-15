import { connect } from 'react-redux'
import CompanySearch from './Search'

const mapState = state => ({
  loading: state.loading.effects.companies.fetch
})

const mapDispatch = dispatch => ({
  fetchCompanies: query => dispatch.companies.fetch(query)
})

export default connect(mapState, mapDispatch)(CompanySearch)
