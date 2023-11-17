import axios from 'axios'

const URL = 'https://api.unsplash.com'

const api = {
  async getDog() {
    try {
      const response = await axios.get(
        `${URL}/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk`
      )

      return response
    } catch (error) {
      return {
        error: 'Error while requesting'
      }
    }
  }
}

export default api
