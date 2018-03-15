import React, { Component } from 'react'
import './Search.css'
import { Field, Control, Input } from 'bloomer'
import { debounce } from 'lodash'
import searchSvg from '../../../assets/search.svg'

class CompanySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.throttleSearch = debounce(this.throttleSearch, 300)
  }

  handleChange(event) {
    const { value } = event.target
    this.setState({ value })
    this.throttleSearch(value)
  }

  throttleSearch(search) {
    this.props.fetchCompanies(search)
  }

  render() {
    return (
      <div className="company-search">
        <Field>
          <Control isLoading={this.props.loading} hasIcons="right">
            <img
              className="search-icon"
              alt="Search companies"
              src={searchSvg}
            />
            <Input
              type="text"
              placeholder="Search by name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
      </div>
    )
  }
}

export default CompanySearch
