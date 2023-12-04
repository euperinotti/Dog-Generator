import { Image } from '@/models/Image'
import axios from 'axios'

const URL = 'https://api.unsplash.com'

const api = {
  async getDog() {
    try {
      const { data } = await axios.get(
        `${URL}/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk`
      )

      console.log(data)

      const response: Image = {
        alt: data.alt_description,
        url: data.urls.raw,
        download: data.links.download,
        display: data.urls.regular,
        user: {
          name: data.user.first_name,
          instagram: data.instagram_username
        }
      }

      return response
    } catch (error) {
      return {
        error: 'Error while requesting'
      }
    }
  },

  async downloadImage(link: string) {
    try {
      const response = await fetch(link)
      const blob = response.blob()

      console.log(blob)

      return response
    } catch (error) {
      return {
        error: 'Error while requesting'
      }
    }
  }
}

export default api
