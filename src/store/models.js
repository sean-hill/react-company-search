import axios from 'axios'

export const companies = {
  state: {
    list: [],
    initialized: false
  },
  reducers: {
    receiveCompanies(state, companies) {
      return {
        ...state,
        list: [...companies]
      }
    },
    initialize(state) {
      return {
        ...state,
        initialized: true
      }
    }
  },
  effects: {
    async fetch(query) {
      const apiUrl = 'https://sb.unbill.co/v1'
      const config = !query
        ? {
            method: 'get',
            url: `${apiUrl}/company/top`
          }
        : {
            method: 'post',
            url: `${apiUrl}/company/search`,
            data: {
              query
            }
          }

      const request = {
        ...config,
        headers: {
          authorization: 'Bearer 1f4c3860-23ae-11e7-bf2a-fbdce2d27727'
        }
      }

      const { data } = await axios(request)
      this.receiveCompanies(data.data)
      this.initialize()
    }
  }
}
